import "./App.css";
import Weather from "./components/Weather";
// import Quote from "./components/Quote";
import Image from "./images/blueblend.webp";

function App() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${Image})` }}>
      <header className="content">
        <Weather />
        {/* <Quote /> */}
      </header>
    </div>
  );
}

export default App;
