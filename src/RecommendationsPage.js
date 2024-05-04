import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendationsPage = () => {
  const [userData, setUserData] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3MB8Lkr9klRm4WTzXEzr9BvYagthqvApobyabAHB6zfUbVjsXzIX9lbdL-Uq_1S74N1sgIIM_uPsF/pub?gid=701399777&single=true&output=csv';
        const response = await axios.get(spreadsheetUrl);
        const rows = response.data.split('\n').map(row => row.split(','));
        const headers = rows[0];
        const userData = rows.slice(1).map(row => {
          const rowData = {};
          row.forEach((cell, index) => {
            rowData[headers[index]] = cell;
          });
          return rowData;
        })[currentIndex];
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const genrePreference = userData['Which book genre do you prefer?'];
        if (!genrePreference) {
          console.log('Genre preference not found.');
          return;
        }
        const formattedGenre = genrePreference.toLowerCase().replace(' ', '_');
        const url = `https://openlibrary.org/subjects/${formattedGenre}.json`;
        const response = await axios.get(url);
        if (response.status === 200 && response.data.works && response.data.works.length > 0) {
          const recommendationsData = response.data.works.slice(0, 5).map(work => work.title);
          setRecommendations(recommendationsData);
        } else {
          setRecommendations([]);
          console.log('No books found for this genre.');
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchUserData();
    fetchRecommendations();
  }, [currentIndex, userData]); // Adicionando userData ao array de dependências

  const handleNextUser = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="container">
      <h2>Results</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dados do Usuário</h5>
              <p className="card-text">
                Name: {userData['What is your name?']}<br />
                Age: {userData['How old are you?']}<br />
                Genre: {userData['Which book genre do you prefer?']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 mb-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recommendations</h5>
              {recommendations.map((recommendation, index) => (
                <p key={index} className="card-text">{recommendation}</p>
              ))}
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleNextUser}>Next User</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;


