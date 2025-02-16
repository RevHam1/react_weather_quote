// I. Imports to help with Javascript client-side logic
import axios from "axios";
import { useEffect, useState } from "react";
import Quote from "./Quote";
import Reset from "./Reset";

import "./styles.css"; // Import the styles
import "./Weather.css";

// Get images; Could put in json file and import but had promble, with images showing in github pages
import Image28 from "../images/1 Aroura.jpg";
import Image29 from "../images/alaska.avif";
import Image30 from "../images/alaska2.avif";
import Image31 from "../images/alaska3.avif";
import Image27 from "../images/auroraBorealis.jpg";
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

import Image59 from "../images/10 Lilies.jpg";
import Image60 from "../images/11 Danger.jpg";
import Image61 from "../images/12 Lake.jpg";
import Image51 from "../images/2 Orangeset.jpg";
import Image52 from "../images/3 Flood.jpg";
import Image53 from "../images/4 CityLondon.jpg";
import Image54 from "../images/5 GlobalHurricame.jpg";
import Image55 from "../images/6 DurbyRace.jpg";
import Image56 from "../images/7 CityFar.jpg";
import Image57 from "../images/8 Co2.jpg";
import Image58 from "../images/9 Solar.jpg";

import Image62 from "../images/13 Rainbow.jpg";
import Image63 from "../images/14 Sever.jpg";
import Image64 from "../images/15 Compass.jpg";
import Image65 from "../images/16 IceWay.jpg";
import Image66 from "../images/17 IceMountain.jpg";
import Image67 from "../images/18 DryMountain.jpg";
import Image68 from "../images/19 TechSky.jpg";
import Image69 from "../images/20 JungleSky.jpg";

import Image70 from "../images/21 RaceRound.jpg";
import Image71 from "../images/22 Farm.jpg";
import Image72 from "../images/23 Energy.jpg";
import Image73 from "../images/24 Street.jpg";
import Image74 from "../images/25 Shinny.jpg";
import Image75 from "../images/26 Earth.jpg";
import Image76 from "../images/27 WindMill.jpg";
import Image77 from "../images/28 CitySmall.jpg";
import Image78 from "../images/29 PlamTree.jpg";
import Image79 from "../images/30 Globe1.png";

import Image80 from "../images/31 Globe2.png";
import Image81 from "../images/32 Bikes.jpg";
import Image82 from "../images/33 Truck.png";
import Image83 from "../images/34 FunFair.png";
import Image84 from "../images/35 Cold.png";
import Image85 from "../images/36 Rainbow2.png";
import Image86 from "../images/37 WeatherSegment.png";
import Image87 from "../images/38 Field2.png";
import Image88 from "../images/39 Tractor.jpg";
import Image89 from "../images/40 Dusty.jpg";

import Image90 from "../images/41 Roses.avif";
import Image91 from "../images/42 MistyPath.avif";
import Image92 from "../images/43 DarkPath.avif";
import Image93 from "../images/44 Drops.avif";
import Image94 from "../images/45 DarkStreet.avif";
import Image95 from "../images/46 OrangeMoon.avif";
import Image96 from "../images/47 Fire.avif";
import Image97 from "../images/48 Path.avif";
import Image98 from "../images/49 MafentaLight.avif";
import Image99 from "../images/50 One Rose.avif";

import Image100 from "../images/51 PuffDark.webp";
import Image101 from "../images/52 Free.png";
import Image102 from "../images/53 Bus.png";
import Image103 from "../images/54 Chicago.png";
import Image104 from "../images/55 PinkCloud.jpg";
import Image105 from "../images/56 HorseClouds.jpg";
import Image106 from "../images/57 NiceSkyLine.jpg";
import Image107 from "../images/58 ColoredClouds.jpg";

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
  Image51,
  Image52,
  Image53,
  Image54,
  Image55,
  Image56,
  Image57,
  Image58,
  Image59,
  Image60,
  Image61,
  Image62,
  Image63,
  Image64,
  Image65,
  Image66,
  Image67,
  Image68,
  Image69,
  Image70,
  Image71,
  Image72,
  Image73,
  Image74,
  Image75,
  Image76,
  Image77,
  Image78,
  Image79,
  Image80,
  Image81,
  Image82,
  Image83,
  Image84,
  Image85,
  Image86,
  Image87,
  Image88,
  Image89,
  Image90,
  Image91,
  Image92,
  Image93,
  Image94,
  Image95,
  Image96,
  Image97,
  Image98,
  Image99,
  Image100,
  Image101,
  Image102,
  Image103,
  Image104,
  Image105,
  Image106,
  Image107,
];

// II. Main Function for client-side javascript logic
// A. Set constanst variables for  various useState and to get api key from env file
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

  // B. Run a useEffect hook that randomly select a different backgroud from the images imported above
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
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

      // Creating a Forecast Object with setState
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
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
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
