import React, { useState } from 'react';
import Stats from '../components/Stats';
import coinsList from '../config/coins'; // Import the single list

const StatsPage = () => {
    const [selectedCoin, setSelectedCoin] = useState(coinsList[0]); // Default to the first coin

    const handleCoinChange = (event) => {
        setSelectedCoin(event.target.value); // Update the selected coin
    };

    return (
        <div>
            <h1>Stats Page</h1>
            <label htmlFor="coin-select">Select a Coin: </label>
            <select id="coin-select" value={selectedCoin} onChange={handleCoinChange}>
                {coinsList.map((coin) => (
                    <option key={coin} value={coin}>
                        {coin.charAt(0).toUpperCase() + coin.slice(1)} {/* Capitalize the first letter */}
                    </option>
                ))}
            </select>
            <Stats coin={selectedCoin} /> {/* Pass the selected coin to the Stats component */}
        </div>
    );
};

export default StatsPage;
