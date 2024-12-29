import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'; // Ensure you have a corresponding CSS file for styling

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/events/search?q=${searchTerm}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('There was an error fetching the search results!', error);
        }
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <h1 className="hero-title">Cosmic Event Observation Database</h1>
                <p className="hero-description">
                    Explore the universe with our comprehensive database of cosmic events. 
                    Discover supernovas, black holes, and more, tracked and observed by astronomers worldwide.
                </p>

                {/* Search Bar */}
                <div className="search-bar">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search cosmic events by name, type, or date..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </div>
            </div>

            {/* Search Results Section */}
            {searchResults.length > 0 && (
                <div className="search-results-section">
                    <h2>Search Results</h2>
                    <ul className="search-results-list">
                        {searchResults.map(event => (
                            <li key={event.EventID} className="search-result-item">
                                <h3>{event.Name}</h3>
                                <p>Type: {event.Type}</p>
                                <p>Discovery Date: {event.DiscoveryDate}</p>
                                <p>Description: {event.Description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Highlights Section */}
            <div className="highlights-section">
                <h2>Highlights</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>Dynamic Observations</h3>
                        <p>Stay updated with real-time observations and data from around the world.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Advanced Analytics</h3>
                        <p>Access light curves, spectral data, and classifications with ease.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Collaborative Insights</h3>
                        <p>Explore contributions from global observers and researchers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;