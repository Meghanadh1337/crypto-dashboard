// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ coinName, price, marketCap, change24h }) => {

    // Function to format large numbers in INR (thousands, lakhs, crores)
    const formatCurrency = (amount) => {
        if (amount < 1000) {
            return amount.toFixed(4); // Display as is for amounts less than 1,000
        } else if (amount >= 1e7) {
            return `${(amount / 1e7).toFixed(4)} Crores`; // Crores
        } else if (amount >= 1e5) {
            return `${(amount / 1e5).toFixed(4)} Lakhs`; // Lakhs
        } else if (amount >= 1e3) {
            return `${(amount / 1e3).toFixed(4)} Thousands`; // Thousands
        }
    };

    const priceInINR = price;
    const marketCapInINR = marketCap;
    const roundedChange = change24h !== undefined ? change24h.toFixed(4) : 'N/A'; // Use a fallback value

    return (
        <div className="card">
            <h2>{coinName} Stats</h2>  {/* Display coin name here */}
            <p><strong>Price:</strong> ₹{formatCurrency(priceInINR)}</p>
            <p><strong>Market Cap:</strong> ₹{formatCurrency(marketCapInINR)}</p>
            <p><strong>24h Change:</strong> {roundedChange}%</p>
        </div>
    );
};

export default Card;
