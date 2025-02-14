// I. Imports to help with Javascript client-side logic
import { useEffect, useState } from "react";
import "./LotteryGenerator.css"; // Import the styles

// II. Main Function for client-side javascript logic
// A. Set constanst variables for  various useState
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

  // A. Run a useEffect hook that runs dynamically updates and displays a list of numbers over time
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

  // B. Run a useEffect hook that runs generateNumbers for lotterty
  useEffect(() => {
    generateNumbers();
  }, []);

  // III. The HTML that utilizes Javascript client-side logic
  return (
    <div className="lottery-container">
      <h5 className="lottery-title">Pick 6 Lottery Numbers</h5>
      <div className="adjust-nmbers-position">
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
