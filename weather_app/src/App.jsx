import "./App.css";
import Weather from "./components/Weather";
// import Quote from "./components/Quote";
// import Image from "./images/blueblend.webp";
// import LotteryGenerator from "./components/LotteryGenerator";

function App() {
  return (
    <div className="hero">
      {/* <div className="hero" style={{ backgroundImage: `url(${Image})` }}> */}
      <header className="content">
        {/* <LotteryGenerator /> */}
        <Weather />
        {/* <Quote /> */}
      </header>
    </div>
  );
}

export default App;
