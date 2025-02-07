import axios from "axios";
import { useEffect, useState } from "react";
import Quote from "./Quote";
import Reset from "./Reset";

import "./styles.css"; // Import the styles
import "./Weather.css";

import Image29 from "../images/alaska.avif";
import Image30 from "../images/alaska2.avif";
import Image31 from "../images/alaska3.avif";
import {
  default as Image27,
  default as Image28,
} from "../images/auroraBorealis.jpg";
import Image43 from "../images/baseball.jpg";
import Image44 from "../images/baseball2.jpg";
import Image from "../images/blueblend.webp";
import Image39 from "../images/chicago.jpg";
import Image40 from "../images/chicago2.jpg";
import Image18 from "../images/chilling.jpeg";
import Image14 from "../images/cityday.jpg";
import Image15 from "../images/citynight.jpg";
import Image13 from "../images/citysky.jpg";
import Image37 from "../images/citySky2.jpg";
import Image38 from "../images/citySky3.jpg";
import Image35 from "../images/clearsky.jpg";
import Image36 from "../images/clearsky2.jpg";
import Image21 from "../images/countryRoad.jpg";
import Image1 from "../images/darkblend.webp";
import Image3 from "../images/darkshy.avif";
import Image10 from "../images/darksky.jpg";
import Image41 from "../images/football.jpg";
import Image42 from "../images/football2.jpg";
import Image22 from "../images/highWay.jpg";
import Image32 from "../images/hurricane.jpg";
import Image20 from "../images/idontknow.webp";
import Image23 from "../images/interstate.jpg";
import Image24 from "../images/lake.jpg";
import Image25 from "../images/lake2.jpg";
import Image48 from "../images/LasVegs.jpg";
import Image49 from "../images/LasVegs2.jpg";
import Image17 from "../images/lookup.jpg";
import Image19 from "../images/maybetommorrow.webp";
import Image2 from "../images/mountains.avif";
import Image11 from "../images/orangesky.jpg";
import Image4 from "../images/orangewbox.jpg";
import Image5 from "../images/purple.webp";
import Image6 from "../images/reddelta.avif";
import Image26 from "../images/skyxcraper.webp";
import Image7 from "../images/staelite.avif";
import Image45 from "../images/StLouis.jpg";
import Image46 from "../images/StLouis2.jpg";
import Image47 from "../images/StLouis3.jpg";
import Image33 from "../images/tornado.webp";
import Image16 from "../images/umbrellas.jpeg";
import Image8 from "../images/violrttTop.jpg";
import Image12 from "../images/weather.jpg";
import Image9 from "../images/weatherBG.png";
import Image50 from "../images/weatherIcon.jpg";
import Image34 from "../images/wildfire.jpg";

const images = [
  Image,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
  Image38,
  Image39,
  Image40,
  Image41,
  Image42,
  Image43,
  Image44,
  Image45,
  Image46,
  Image47,
  Image48,
  Image49,
  Image50,
];

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
      );

      if (response.data.cod !== 200) {
        setWeatherInfo({ error: "City not found!" });
      } else {
        const weatherData = response.data;
        setWeatherInfo({
          city: weatherData.name,
          temperature: weatherData.main.temp.toFixed(1),
          description:
            weatherData.weather[0].description.charAt(0).toUpperCase() +
            weatherData.weather[0].description.slice(1),
          icon: weatherData.weather[0].icon,
          feels_like: weatherData.main.feels_like.toFixed(1),
        });
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherInfo({
        error:
          "Unable to fetch data. Make sure the name of the city is spelled Correctly!",
      });
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <h1 id="get-weather-conditions">Get Weather Conditions</h1>
        <p className="conditions-always-change">The Conditions Always Change</p>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
        <button className="input-button" onClick={getWeatherData}>
          Get Weather
        </button>

        {!weatherInfo && <Quote className="conditions-always-change" />}

        {weatherInfo && (
          <div>
            {weatherInfo.error ? (
              <p>{weatherInfo.error}</p>
            ) : (
              <div className="forecast-details">
                <h2 className="forecast-title">
                  Forecast for {weatherInfo.city}
                </h2>
                <p className="forecast-description">
                  {weatherInfo.description} and {weatherInfo.temperature}°F
                </p>
                <p className="feels-like">
                  Feels Like: {weatherInfo.feels_like}°F
                </p>
                <img
                  src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`}
                  alt={weatherInfo.description}
                  className="weather-icon"
                />
              </div>
            )}
          </div>
        )}
        {/* <WeatherForecast /> */}

        <Reset />
      </div>
    </section>
  );
}

export default WeatherApp;
