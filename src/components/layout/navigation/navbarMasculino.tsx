'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const MotionDiv = motion("div")

type NavLink = {
    id: string
    title: string
    to: string
}

const navLinks: NavLink[] = [
    { id: "partidos", title: "Partidos", to: "/masculino/partidos" },
    { id: "equipos", title: "Equipos", to: "/masculino/equipos" },
    { id: "fase_de_grupos", title: "Fase de grupos", to: "/masculino/fase_de_grupos" },
    { id: "cuadro_de_eliminatorias", title: "Cuadro de eliminatorias", to: "/masculino/cuadro_de_eliminatorias" },
    { id: "estadisticas", title: "Estadísticas", to: "/masculino/estadisticas" },
    { id: "femenino", title: "Femenino", to: "/femenino/partidos" },
]

const NavItem = ({ nav, active, onClick }: { nav: NavLink, active: string, onClick: (title: string) => void }) => (
    <li className={`group relative`}>
        <Link
            href={nav.to}
            onClick={() => onClick(nav.title)}
            className={`
                font-poppins font-medium cursor-pointer
                text-xl sm:text-2xl lg:text-3xl xl:text-3xl
                transition-all duration-300 ease-in-out
                ${nav.id === "femenino" ? "text-pink-400 hover:text-pink-300" : "text-gray-300 hover:text-white"}
                ${active === nav.title ? "text-white font-semibold" : ""}
                hover:scale-105
            `}
        >
            {nav.title}
        </Link>
        {active === nav.title && (
            <motion.div
                layoutId="activeTab"
                style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, #ff9966, #ff5500)',
                    borderRadius: '9999px'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
            />
        )}
    </li>
)

export default function Navbar() {
    const [active, setActive] = useState("Home")
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = useCallback((title: string) => {
        setActive(title)
        setIsOpen(false)
    }, [])

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return (
        <nav className="w-full fixed top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 flex justify-between items-center">
                <Link href="/masculino" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <Image
                        src="/assets/logo.webp"
                        alt="Logo"
                        width={250}
                        height={80}
                        className="w-auto h-16 sm:h-20 lg:h-24"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20 items-center">
                    {navLinks.map((nav) => (
                        <NavItem
                            key={nav.id}
                            nav={nav}
                            active={active}
                            onClick={handleNavClick}
                        />
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff7733] transition-all duration-300"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    <Image
                        src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                        alt={isOpen ? "Cerrar menú" : "Abrir menú"}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <MotionDiv
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            background: 'rgba(17, 24, 39, 0.95)',
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        <div className="px-4 py-3 space-y-2">
                            {navLinks.map((nav) => (
                                <motion.div
                                    key={nav.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        href={nav.to}
                                        onClick={() => handleNavClick(nav.title)}
                                        className={`
                                            block px-4 py-3 rounded-lg text-xl font-medium
                                            transition-all duration-300 ease-in-out
                                            ${nav.id === "femenino" ? "text-pink-400 hover:text-pink-300" : "text-gray-300 hover:text-white"}
                                            ${active === nav.title ? "bg-gray-800/80 text-white" : "hover:bg-gray-800/50"}
                                        `}
                                    >
                                        {nav.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </nav>
    )
}