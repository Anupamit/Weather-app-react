import React, { useState } from 'react';
import axios from 'axios';
import WeatherSearch from './Components/WeatherSeach';
import WeatherCard from './Components/WeatherCard';


const API_KEY = '1cb6532aea3c298a830a71380eace21e';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <WeatherSearch onSearch={fetchWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
