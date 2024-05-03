import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const GoogleSheetsData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your Google Sheets URL
    const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3MB8Lkr9klRm4WTzXEzr9BvYagthqvApobyabAHB6zfUbVjsXzIX9lbdL-Uq_1S74N1sgIIM_uPsF/pub?gid=701399777&single=true&output=csv';

    // Make an HTTP GET request to fetch the data
    axios.get(spreadsheetUrl)
      .then(response => {
        // Process the data
        const rows = response.data.split('\n').map(row => row.split(','));
        const headers = rows[0]; // Assuming the first row contains headers

        // Convert rows to objects using headers as keys
        const parsedData = rows.slice(1).map(row => {
          const rowData = {};
          row.forEach((cell, index) => {
            rowData[headers[index]] = cell;
          });
          return rowData;
        });

        // Update state with the parsed data
        setData(parsedData);
      })
      .catch(error => {
        console.error('Error fetching data from Google Sheets:', error);
      });
  }, []);

  return (
    <div>
      <h2>Google Sheets Data</h2>
      <ul>
        {data.map((row, index) => (
          <li key={index}>
            Carimbo de data/hora: {row['Carimbo de data/hora']},
            Name: {row['What is your name?']},
            Age: {row['How old are you?']},
            Genre: {row['Which book genre do you prefer?']},
            Recommendations: {row['Recommendations']}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetsData;
