import React, { useState } from 'react';
import './WeatherSearch.css';

const WeatherSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [err, setErr] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (location.trim() === '') {
      setErr('Please enter a city name');
    } else {
      setErr('');
      const weatherData = await onSearch(location);
      if (weatherData && weatherData.error) {
        setErr('City not found. Please enter a valid city name.');
      }
    }
  };

  return (
    <div className="weather-search-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
          className="location-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {err && <div className="error-message">{err}</div>}
      </form>
    </div>
  );
};

export default WeatherSearch;
