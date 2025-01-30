// import axios from "axios";
// import { useState } from "react";
// import Quote from "./Quote";
// import Reset from "./Reset";
// import "./Weather.css"; // Import the CSS file
// // import weatherBG from "./weatherBG.png";

// function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [weatherInfo, setWeatherInfo] = useState(null);

//   const apiKey = import.meta.env.VITE_API_KEY;

//   const getWeatherData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
//       );

//       if (response.data.cod !== 200) {
//         setWeatherInfo({ error: "City not found!" });
//       } else {
//         const weatherData = response.data;
//         setWeatherInfo({
//           city: weatherData.name,
//           temperature: weatherData.main.temp.toFixed(1),
//           description:
//             weatherData.weather[0].description.charAt(0).toUpperCase() +
//             weatherData.weather[0].description.slice(1),
//           icon: weatherData.weather[0].icon,
//           feels_like: weatherData.main.feels_like.toFixed(1),
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       setWeatherInfo({
//         error:
//           "Unable to fetch data. Make sure the name of the city is spelled Correctly!",
//       });
//     }
//   };

//   return (
//     <section className=".hero">
//       <div>
//         <h1>Get Weather Conditions</h1>

//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city"
//           className="city-input"
//         />
//         <button onClick={getWeatherData}>Get Weather</button>

//         <Quote
//           style={{
//             padding: "10px 10px",
//             with: "1200px",
//             fontSize: "30px",
//           }}
//         />

//         {weatherInfo && (
//           <div>
//             {weatherInfo.error ? (
//               <p>{weatherInfo.error}</p>
//             ) : (
//               <div>
//                 <h3>Forecast for {weatherInfo.city}</h3>
//                 <p>
//                   {weatherInfo.description} and {weatherInfo.temperature}°F
//                 </p>
//                 {/* <p>Description: {weatherInfo.description}</p> */}
//                 <p>Feels Like: {weatherInfo.feels_like}°F</p>
//                 <img
//                   src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`}
//                   alt={weatherInfo.description}
//                 />
//               </div>
//             )}
//           </div>
//         )}

//         <Reset />
//       </div>
//     </section>
//   );
// }

// export default WeatherApp;

import axios from "axios";
import { useEffect, useState } from "react";
import Quote from "./Quote";
import Reset from "./Reset";
import "./Weather.css";

import Image from "../images/blueblend.webp";
import Image18 from "../images/chilling.jpeg";
import Image14 from "../images/cityday.jpg";
import Image15 from "../images/citynight.jpg";
import Image13 from "../images/citysky.jpg";
import Image1 from "../images/darkblend.webp";
import Image3 from "../images/darkshy.avif";
import Image10 from "../images/darksky.jpg";
import Image20 from "../images/idontknor.webp";
import Image17 from "../images/lookup.jpg";
import Image19 from "../images/maybetommorrow.webp";
import Image2 from "../images/mountains.avif";
import Image11 from "../images/orangesky.jpg";
import Image4 from "../images/orangewbox.jpg";
import Image5 from "../images/purple.webp";
import Image6 from "../images/reddelta.avif";
import Image7 from "../images/staelite.avif";
import Image16 from "../images/umbrellas.jpeg";
import Image8 from "../images/violrttTop.jpg";
import Image12 from "../images/weather.jpg";
import Image9 from "../images/weatherBG.png";

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
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h1>Get Weather Conditions</h1>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
        <button onClick={getWeatherData}>Get Weather</button>

        <Quote
          style={{
            padding: "10px 10px",
            with: "1200px",
            fontSize: "36px",
          }}
        />

        {weatherInfo && (
          <div>
            {weatherInfo.error ? (
              <p>{weatherInfo.error}</p>
            ) : (
              <div>
                <h3>Forecast for {weatherInfo.city}</h3>
                <p>
                  {weatherInfo.description} and {weatherInfo.temperature}°F
                </p>
                {/* <p>Description: {weatherInfo.description}</p> */}
                <p>Feels Like: {weatherInfo.feels_like}°F</p>
                <img
                  src={`http://openweathermap.org/img/w/${weatherInfo.icon}.png`}
                  alt={weatherInfo.description}
                />
              </div>
            )}
          </div>
        )}

        <Reset />
      </div>
    </section>
  );
}

export default WeatherApp;
