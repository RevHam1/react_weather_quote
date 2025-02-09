// import axios from "axios";
// import { useEffect, useState } from "react";
// import LotteryGenerator from "./LotteryGenerator";
// import "./Quote.css"; // Import the styles

// function QuoteComponent() {
//   const [quote, setQuote] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchQuote = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
//         headers: {
//           "X-Api-Key": import.meta.env.VITE_API_NINJAS_QUOTE_KEY,
//         },
//       });
//       setQuote(response.data[0]);
//     } catch (error) {
//       console.error("Error fetching quote:", error);
//       setQuote({ quote: "Failed to load quote." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   return (
//     <div className="quote-container">
//       <h3>Quote for Today</h3>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="quote-content">
//           <p className="quote">&quot;{quote.quote}&quot;</p>
//           <p className="quote-author">-{quote.author}-</p>
//           <LotteryGenerator />
//         </div>
//       )}
//     </div>
//   );
// }

// export default QuoteComponent;

import axios from "axios";
import { useEffect, useState } from "react";
import LotteryGenerator from "./LotteryGenerator";
import "./Quote.css"; // Import the styles

function QuoteComponent() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_QUOTE_KEY,
        },
        params: {
          maxLength: 120, // Set the max length of the quote
        },
      });
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({ quote: "Failed to load quote." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h3>Quote for Today</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="quote-content">
          <p className="quote">&quot;{quote.quote}&quot;</p>
          <p className="quote-author">-{quote.author}-</p>
          <LotteryGenerator />
        </div>
      )}
    </div>
  );
}

export default QuoteComponent;
