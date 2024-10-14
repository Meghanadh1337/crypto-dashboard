// src/components/Deviation.js
import React, { useEffect, useState } from 'react';
import API_URL from '../config/config';

const Deviation = ({ selectedCoin, setDeviationData }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDeviationData(selectedCoin);
    }, [selectedCoin]);

    const fetchDeviationData = async (coin) => {
        setIsLoading(true);
        setError(null);
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
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return null; // No additional UI needed for the Deviation component itself
};

export default Deviation;
