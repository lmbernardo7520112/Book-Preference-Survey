// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file
import BookPreferenceSurvey from './BookPreferenceSurvey';

function App() {
  return (
    <div className="container">
      <BookPreferenceSurvey />
    </div>
  );
}

export default App;
