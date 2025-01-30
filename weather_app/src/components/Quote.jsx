import axios from "axios";
import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("http://api.quotable.io/random");
      setQuote(response.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>Quote for Today</h2>
      {quote ? (
        <div className="quote">
          <p
            style={{
              fontStyle: "italic",
              padding: "10px 10px",
              width: "1200px",
              color: "yellow",
              fontSize: "32px",
            }}
          >
            &quot;{quote.content}&quot;
          </p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <br />
    </div>
  );
}

export default Quote;
