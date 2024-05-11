import React from 'react';
import Partido from '../components/Partido';
import '../partidos.css'; // Import the CSS file

const Partidos = () => {
    const partidosData = [
        { equipoA: 'Equipo A1', equipoB: 'Equipo A2', fecha: '03/06', hora: '11:00' },
        { equipoA: 'Equipo B1', equipoB: 'Equipo B2', fecha: '04/06', hora: '12:00' },
        // Add more partido data as needed
    ];

    return (
        <div className="partidos-page">
            <h2>Fase de grupos</h2>
            {partidosData.map((partido) => (
                <Partido key={partido.equipoA + partido.equipoB} {...partido} />
            ))}
        </div>
    );
};

export default Partidos;