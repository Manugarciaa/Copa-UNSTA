import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const LeerFaseDeGruposCSV = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datoFaseDeGrupos.csv');
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
              'Grupo',
              'Logo',
              'ID',
              'Equipo',
              'Pts',
              'PJ',
              'PG',
              'PE',
              'PP',
              'GF',
              'GC',
              'Dif',
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
      {filteredData.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Grupo</th>
              <th className="p-3 text-left">Logo</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Equipo</th>
              <th className="p-3 text-left">Pts</th>
              <th className="p-3 text-left">PJ</th>
              <th className="p-3 text-left">PG</th>
              <th className="p-3 text-left">PE</th>
              <th className="p-3 text-left">PP</th>
              <th className="p-3 text-left">GF</th>
              <th className="p-3 text-left">GC</th>
              <th className="p-3 text-left">Dif</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="p-3">{row.Grupo || 'N/A'}</td>
                <td className="p-3">{row.Logo || 'N/A'}</td>
                <td className="p-3">{row.ID || 'N/A'}</td>
                <td className="p-3">{row.Equipo || 'N/A'}</td>
                <td className="p-3">{row.Pts || 'N/A'}</td>
                <td className="p-3">{row.PJ || 'N/A'}</td>
                <td className="p-3">{row.PG || 'N/A'}</td>
                <td className="p-3">{row.PE || 'N/A'}</td>
                <td className="p-3">{row.PP || 'N/A'}</td>
                <td className="p-3">{row.GF || 'N/A'}</td>
                <td className="p-3">{row.GC || 'N/A'}</td>
                <td className="p-3">{row.Dif || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default LeerFaseDeGruposCSV;