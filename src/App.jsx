import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
// Importing the CSS file for styling
// Importing the CSS file for styling
// Importing the CSS file for styling
// Importing the CSS file for styling

import Sketch from './pages/Sketch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sketch" element={<Sketch />} />
      </Routes>
    </Router>
  );
};

export default App;
