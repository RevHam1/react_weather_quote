import axios from "axios";
import { useEffect, useState } from "react";
import LotteryGenerator from "./LotteryGenerator";

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

  const getQuoteStyle = (quote) => {
    return quote.length < 120
      ? { fontSize: "38px", color: "white", textShadow: "2px 2px 4px black" }
      : { fontSize: "29px", color: "white", textShadow: "2px 2px 4px black" };
  };

  return (
    <div
      className="quote-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h3 style={{ textShadow: "2px 2px 4px black" }}>Quote for Today</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ padding: "10px", width: "1180px" }}>
          <p style={getQuoteStyle(quote.quote)}>&quot;{quote.quote}&quot;</p>
          <p
            style={{
              scrollMarginBottom: "30px",
              color: "white",
              textShadow: "2px 2px 4px black",
            }}
          >
            -{quote.author}-
          </p>
          <LotteryGenerator />
        </div>
      )}
    </div>
  );
}

export default QuoteComponent;
