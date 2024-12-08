'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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
                font-poppins font-medium text-xl lg:text-2xl
                transition-colors duration-200
                ${nav.id === "femenino" ? "text-pink-400 hover:text-pink-300" : "text-gray-300 hover:text-white"}
                ${active === nav.title ? "text-white" : ""}
            `}
        >
            {nav.title}
        </Link>
        {active === nav.title && (
            <motion.span
                layoutId="activeTab"
                style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: 'white'
                }}
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
        <nav className="w-full py-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center gap-20">
                <Link href="/masculino" className="flex-shrink-0">
                    <Image
                        src="/assets/logo.webp"
                        alt="Logo"
                        width={250}
                        height={80}
                        className="w-auto h-20 lg:h-24"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex space-x-20 lg:space-x-24 items-center">
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
                    className="sm:hidden p-4 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    <Image
                        src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                        alt={isOpen ? "Close menu" : "Open menu"}
                        width={36}
                        height={36}
                        className="w-9 h-9"
                    />
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: window.innerWidth > 640 ? 'none' : 'block' }}
                    >
                        <div className="px-6 pt-4 pb-6 space-y-3 bg-gray-900 shadow-lg rounded-b-lg">
                            {navLinks.map((nav) => (
                                <Link
                                    key={nav.id}
                                    href={nav.to}
                                    onClick={() => handleNavClick(nav.title)}
                                    className={`
                                        block px-5 py-4 rounded-md text-xl font-medium
                                        ${nav.id === "femenino" ? "text-pink-400 hover:text-pink-300" : "text-gray-300 hover:text-white"}
                                        ${active === nav.title ? "bg-gray-800" : ""}
                                    `}
                                >
                                    {nav.title}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}