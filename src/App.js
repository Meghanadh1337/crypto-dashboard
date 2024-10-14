import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Fix the casing here as well
import StatsPage from './pages/StatsPage'; // Use StatsPage consistently
import DeviationPage from './pages/DeviationPage'; // Import the Deviation component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Corrected HomePage */}
        <Route path="/stats" element={<StatsPage />} /> {/* Use StatsPage */}
        {/* Add other routes here */}
        <Route path="/deviation" element={<DeviationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
