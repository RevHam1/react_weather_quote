import axios from "axios";
import { useEffect, useState } from "react";

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

  return (
    <div
      className="quote-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>Quote for Today</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p
          style={{
            fontStyle: "italic",
            padding: "10px 10px",
            width: "1200px",
            color: "yellow",
            fontSize: "32px",
          }}
        >
          &quot;{quote.quote}&quot;
          <p>-{quote.author}-</p>
        </p>
      )}
    </div>
  );
}

export default QuoteComponent;
