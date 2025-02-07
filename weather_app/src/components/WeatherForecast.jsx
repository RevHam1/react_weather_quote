import axios from "axios";
import { useState } from "react";

function WeatherForecast() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY; // Use your OpenWeather API key here

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        ),
      ]);
      setCurrentWeather(currentResponse.data);
      setForecast(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ margin: "20px", padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={getWeatherData}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Get Forecast
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {currentWeather && (
        <div>
          <h2>Today's Weather for {currentWeather.name}</h2>
          <p>{currentWeather.weather[0].description}</p>
          <p>{currentWeather.main.temp} °C</p>
          <img
            src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
            alt={currentWeather.weather[0].description}
          />
        </div>
      )}
      {forecast && (
        <div>
          <h2>5-Day Weather Forecast for {forecast.city.name}</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {forecast.list.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "150px",
                }}
              >
                <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
                <p>{item.weather[0].description}</p>
                <p>{item.main.temp} °C</p>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherForecast;
