// RecommendationsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendationsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3MB8Lkr9klRm4WTzXEzr9BvYagthqvApobyabAHB6zfUbVjsXzIX9lbdL-Uq_1S74N1sgIIM_uPsF/pub?gid=701399777&single=true&output=csv';

    axios.get(spreadsheetUrl)
      .then(response => {
        const rows = response.data.split('\n').map(row => row.split(','));
        const headers = rows[0];
        const parsedData = rows.slice(1).map(row => {
          const rowData = {};
          row.forEach((cell, index) => {
            rowData[headers[index]] = cell;
          });
          return rowData;
        });
        setData(parsedData);
      })
      .catch(error => {
        console.error('Error fetching data from Google Sheets:', error);
      });
  }, []);

  // Função para dividir os valores da coluna "Recommendations" corretamente
  const splitRecommendations = (recommendations) => {
    return recommendations ? recommendations.split(', ') : [];
  };

  return (
    <div className="container">
      <h2>Results</h2>
      <div className="row">
        {data.map((row, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{row['What is your name?']}</h5>
                <p className="card-text">
                  Age: {row['How old are you?']}<br />
                  Genre: {row['Which book genre do you prefer?']}<br />
                  Recommendations: {splitRecommendations(row['Recommendations']).map((recommendation, index) => (
                    <span key={index}>{recommendation}{index < splitRecommendations(row['Recommendations']).length - 1 ? ', ' : ''}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
