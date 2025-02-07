import { useEffect, useState } from "react";
import "./LotteryGenerator.css"; // Import the styles

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
    <div className="lottery-container">
      <h5 className="lottery-title">Pick 6 Lottery Numbers</h5>
      <div>
        {displayedNumbers.map((number, index) => (
          <div key={index} className="lottery-number">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LotteryGenerator;
