import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Fix the casing here as well
import StatsPage from './pages/StatsPage'; // Use StatsPage consistently

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Corrected HomePage */}
        <Route path="/stats" element={<StatsPage />} /> {/* Use StatsPage */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
