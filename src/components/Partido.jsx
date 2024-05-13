const Partido = ({ equipoA, equipoB, fecha, hora }) => {
    return (
        <div className="partido-item">
            <div className="equipo-info">
                <span className="equipo-nombre">{equipoA}</span>
                <span className="vs">vs.</span>
                <span className="equipo-nombre">{equipoB}</span>
            </div>
            <div className="fecha-hora">
                <span className="fecha">{fecha}</span>
                <span className="hora">{hora}</span>
            </div>
        </div>
    );
};

export default Partido;