import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const LeerCSV = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datoEquipos.csv');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo CSV');
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (results) => {
            const filteredColumns = ['Nombre', 'Apellido', 'Carrera', 'ID'];
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
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Carrera</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.Nombre || 'N/A'}</td>
                <td>{row.Apellido || 'N/A'}</td>
                <td>{row.Carrera || 'N/A'}</td>
                <td>{row.ID || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeerCSV;