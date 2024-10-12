// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import '../components/HomePage.css'; // Correct the path to the CSS file
import Header from '../components/Header'; // Correct the import path for Header

const Homepage = () => {
    return (
        <>
            <Header />
            <div className="homepage">
                <div className="card">
                    <h2>Explore Cryptocurrency Stats</h2>
                    <Link to="/stats" className="button">Go to Stats</Link> {/* Link to stats page */}
                </div>
            </div>
        </>
    );
};

export default Homepage;
