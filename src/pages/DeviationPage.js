import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Deviation from '../components/Deviation';
import API_URL from '../config/config';
import coinsList from '../config/coins'; // Ensure the path is correct
import '../components/DeviationPage.css';

const DeviationPage = () => {
    const { coin } = useParams();
    const [deviationData, setDeviationData] = useState(null);
    const [inrDeviationData, setInrDeviationData] = useState(null);
    const [selectedCoin, setSelectedCoin] = useState(coin || 'Ethereum');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDeviationData(selectedCoin);
        fetchInrDeviationData(selectedCoin);
    }, [selectedCoin]);

    const fetchDeviationData = async (coin) => {
        try {
            const response = await fetch(`${API_URL}deviation?coin=${coin}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDeviationData(data);
        } catch (error) {
            console.error("Error fetching deviation data:", error);
            setError("Failed to fetch data. Please try again later.");
        }
    };

    const fetchInrDeviationData = async (coin) => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=$coin&vs_currencies=inr`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            //setInrDeviationData(data[coin.toLowerCase()].inr); // Get INR price
        } catch (error) {
            console.error("Error fetching INR deviation data:", error);
            //setError("Failed to fetch INR data. Please try again later.");
        }
    };

    const handleCoinChange = (event) => {
        setSelectedCoin(event.target.value);
    };

    return (
        <div className="deviation-page">
            <h1>Deviation Page</h1>
            <label htmlFor="coin-select">Select a coin:</label>
            <select id="coin-select" value={selectedCoin} onChange={handleCoinChange}>
                {coinsList.map((coinItem) => (
                    <option key={coinItem} value={coinItem}>
                        {coinItem}
                    </option>
                ))}
            </select>

            {/* Use Deviation component properly */}
            <Deviation selectedCoin={selectedCoin} setDeviationData={setDeviationData} />

            {/* Display Deviation Data */}
            {deviationData && (
                <div className="deviation-info">
                    <h3>Deviation Data for {selectedCoin}</h3>
                    <p>Deviation: {deviationData.deviation.toFixed(2)}</p>
                </div>
            )}

            {/* Optionally display INR Price */}
            {inrDeviationData && (
                <div className="inr-info">
                    <h3>INR Price for {selectedCoin}</h3>
                    <p>Current INR Price: ₹{inrDeviationData}</p>
                </div>
            )}

            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeviationPage;
