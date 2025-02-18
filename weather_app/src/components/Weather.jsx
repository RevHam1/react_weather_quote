// I. Imports to help with Javascript client-side logic
import axios from "axios";
import { useEffect, useState } from "react";
import Quote from "./Quote";
import Reset from "./Reset";

import "./styles.css"; // Import the styles
import "./Weather.css";

// Import images from JSON file
import imageData from "./images.json";

// Convert image paths to actual imports
// Modify Weather.jsx file to use dynamic imports with ES modules
const images = imageData.images.map(
  (img) => new URL(img, import.meta.url).href
);

// Import images from JSON file

// II. Main Function for client-side javascript logic
// A. Set constanst variables for various useState and to get api key from env file
function WeatherApp() {
  const [city, setCity] = useState("");
  const [state, setState] = useState(""); // New state for state code
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [alerts, setAlerts] = useState(null); // New state for alerts
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  // B. Run a useEffect hook that randomly selects a different background from the images imported above
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageData.images.length);
    const imagePath = imageData.images[randomIndex];

    import(`${imagePath}`)
      .then((image) => {
        setBackgroundImage(image.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  // C. Arrow function (try, catch, finally) to Get weather informtion from weather api
  const getWeatherData = async () => {
    setLoading(true);
    setError(null);
    // 1. Try
    // Getting data from API
    try {
      const location = state ? `${city},${state},US` : city; // Include state if provided
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`
        ),
      ]);
      // Creating a Weather Info Object from response and use setState - setWeatherInfo
      setWeatherInfo({
        description: currentResponse.data.weather[0].description,
        temperature: currentResponse.data.main.temp,
        feels_like: currentResponse.data.main.feels_like,
        icon: currentResponse.data.weather[0].icon,
        name: currentResponse.data.name,
        state: state || "", // Add state to weatherInfo, default to empty string if not provided
      });

      // Creating a Forecast Object by speading forecastResponse
      setForecast({
        ...forecastResponse.data,
        state: state || "", // Add state to forecast data
      });
      // Check for alerts with setStsate - setAlerts
      if (currentResponse.data.alerts) {
        setAlerts(currentResponse.data.alerts);
      } else {
        setAlerts(null);
      }

      // 2. Catch and display error message with if/else
    } catch (error) {
      console.error("Error fetching weather data:", error);
      if (error.response && error.response.status === 404) {
        setError(
          "Invalid city or state. Please check your input and try again."
        );
      } else {
        setError("Failed to fetch weather data. Please try again.");
      }

      // 3. finally
    } finally {
      setLoading(false);
    }
  };

  // III. The HTML that utilizes Javascript client-side logic
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}

      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      <div className="cutbottom">
        <h1 id="get-weather-conditions">Get Weather Conditions</h1>
        <p className="conditions-always-change">The Conditions Always Change</p>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State (2 letter Abrv)"
          className="city-input"
        />
        <button className="input-button" onClick={getWeatherData}>
          Get Weather
        </button>

        {loading && <p>Loading...</p>}
        {error && (
          <p
            style={{
              marginBottom: "90px",
            }}
          >
            {error}
          </p>
        )}
        {!weatherInfo && !loading && !error && (
          <Quote className="conditions-always-change" />
        )}

        {weatherInfo && (
          <div>
            <div className="forecast-details">
              <h2 className="forecast-title">
                Today&apos;s Forecast for {weatherInfo.name}
                {weatherInfo.state && ` ${weatherInfo.state}`}
              </h2>

              <p className="forecast-description">
                {weatherInfo.description.charAt(0).toUpperCase() +
                  weatherInfo.description.slice(1)}{" "}
                & {Math.round(weatherInfo.temperature)}°F
              </p>

              <p className="feels-like">
                Feels Like: {Math.round(weatherInfo.feels_like)}°F
              </p>

              {alerts ? (
                <div
                  className="alerts"
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    border: "2px dashed white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {alerts.map((alert, index) => (
                    <div key={index} className="alert">
                      <h5 className="small-grid">{alert.headline}</h5>
                      <p className="super-small-grid">{alert.description}</p>
                      <h1 id="get-weather-conditions">Get Weather Alerts 1</h1>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="weather-icon-position">
                  <img
                    src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`}
                    alt={weatherInfo.description}
                    className="weather-icon"
                  />
                  {/* <h1 id="get-weather-conditions">Get Weather Icon</h1> */}
                </div>
              )}

              {forecast && (
                <div style={{ marginBottom: "-20px", paddingBottom: "-20px" }}>
                  <h4 id="days-5">
                    5-Day Forecast for {forecast.city.name}{" "}
                    {forecast.state && ` ${forecast.state}`}
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {forecast.list
                      .filter((_, index) => index % 8 === 0)
                      .map((item, index) => (
                        <div key={index}>
                          <div className="forcast5 grid-con">
                            <p className="cutbottom small-grid">
                              {new Date(item.dt_txt).toLocaleDateString(
                                "en-US",
                                { weekday: "short" }
                              )}
                            </p>
                            <p className="cutbottom super-small-grid">
                              {item.weather[0].description}
                            </p>
                            <p className="temp cutbottom small-grid">
                              {Math.round(item.main.temp)}°F
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Reset />
      </div>
    </section>
  );
}
export default WeatherApp;
