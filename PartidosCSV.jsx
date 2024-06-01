import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const LeerPartidosCSV = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datoPartidos.csv');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo CSV');
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (results) => {
            const filteredColumns = [
              'Partido',
              'Descripcion',
              'Equipo1',
              'Equipo2',
              'Fecha',
              'Hora',
              'Resultado',
              'Estado'
            ];
            const filteredRows = results.data.map((row) => {
              const filteredRow = {};
              filteredColumns.forEach((column) => {
                if (row.hasOwnProperty(column)) {
                  filteredRow[column] = row[column];
                } else {
                  console.warn(`La columna '${column}' no existe en el CSV.`);
                }
              });
              return filteredRow;
            });
            setData(results.data);
            setFilteredData(filteredRows);
          },
          error: (error) => {
            console.error('Error al parsear el CSV:', error);
            setError('Error al parsear el archivo CSV');
          }
        });
      } catch (error) {
        console.error('Error al cargar el archivo CSV:', error);
        setError('Error al cargar el archivo CSV');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {filteredData.length > 0 && (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Partido</th>
              <th className="p-3 text-left">Descripción</th>
              <th className="p-3 text-left">Equipo 1</th>
              <th className="p-3 text-left">Equipo 2</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Hora</th>
              <th className="p-3 text-left">Resultado</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="p-3">{row.Partido || 'N/A'}</td>
                <td className="p-3">{row.Descripcion || 'N/A'}</td>
                <td className="p-3">{row.Equipo1 || 'N/A'}</td>
                <td className="p-3">{row.Equipo2 || 'N/A'}</td>
                <td className="p-3">{row.Fecha || 'N/A'}</td>
                <td className="p-3">{row.Hora || 'N/A'}</td>
                <td className="p-3">{row.Resultado || 'N/A'}</td>
                <td className="p-3">{row.Estado || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeerPartidosCSV;