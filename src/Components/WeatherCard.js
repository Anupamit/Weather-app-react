import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  
  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather-card-container">
      <h2>Weather Information</h2>
      <p>Location: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
    </div>
  );
};

export default WeatherCard;
