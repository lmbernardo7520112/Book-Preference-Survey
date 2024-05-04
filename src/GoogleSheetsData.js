import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './App.css'; // Import CSS file for styling

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
    <div className="recommendations-container">
      <h2 className="section-title">Book Recommendations</h2>
      <div className="card-container">
        {data.map((row, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{row['Recommendations']}</h3>
            <p className="card-text">
              <span className="highlight">Author:</span> {row['Author']}
            </p>
            <p className="card-text">
              <span className="highlight">Genre:</span> {row['Genre']}
            </p>
            <p className="card-text">
              <span className="highlight">Rating:</span> {row['Rating']}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleSheetsData;
