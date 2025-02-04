import { useEffect, useState } from "react";

function LotteryGenerator() {
  const [numbers, setNumbers] = useState([]);
  const [displayedNumbers, setDisplayedNumbers] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = () => {
    let generatedNumbers = [];
    while (generatedNumbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber);
      }
    }
    setNumbers(generatedNumbers);
    setDisplayedNumbers([]);
    setIsGenerating(true);
  };

  useEffect(() => {
    if (isGenerating && numbers.length > 0) {
      let index = 0;

      const interval = setInterval(() => {
        setDisplayedNumbers((prev) => [...prev, numbers[index]]);
        index += 1;
        if (index >= numbers.length - 1) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isGenerating, numbers]);

  useEffect(() => {
    generateNumbers();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h5
        style={{
          fontStyle: "italic",
          paddingTop: "40px",
          //   padding: "10px 10px",
          width: "1180px",
          color: "yellow",
          textShadow: "2px 2px 4px black",
          fontSize: "26px",
          //   textAlign: "center",
          //   alignItems: "cemter",
        }}
      >
        Pick 6 Lottery Numbers
      </h5>

      <div>
        {displayedNumbers.map((number, index) => (
          <div
            key={index}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30px", // Adjust size as needed
              height: "30px", // Adjust size as needed
              backgroundColor: "red",
              borderRadius: "50%",
              color: "white",
              textAlign: "center",
              fontSize: "15px",
              margin: "10px",
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LotteryGenerator;
