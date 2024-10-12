// src/components/Stats.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/config';
import Card from './Card'; // Import Card component
import Header from './Header'; // Import the Header component

const Stats = ({ coin }) => {
    const [stats, setStats] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${API_URL}${coin}`);
                console.log(response.data); // Check the structure of the data
                setStats(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch data.');
            }
        };

        fetchStats();
    }, [coin]);

    if (error) {
        return <p>{error}</p>; // Display error if there is one
    }

    // Use the Card component to display the fetched stats
    return (
        <>
            <Header /> {/* Add the Header component */}
            <div>
                <h2>Cryptocurrency Stats</h2>
                <Card
                    coinName={coin}
                    price={stats.price}
                    marketCap={stats.marketCap}
                    change24h={stats['24hChange']}
                />
            </div>
        </>
    );
};

export default Stats;
