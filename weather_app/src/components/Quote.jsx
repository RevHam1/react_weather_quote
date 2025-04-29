// I. Imports to help with Javascript client-side logic
import axios from "axios";
import { useEffect, useState } from "react";
import LotteryGenerator from "./LotteryGenerator";
import "./Quote.css"; // Import the styles

// II. Main Function for client-side javascript logic
// A. Set constanst variables for  various useState
function QuoteComponent() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  // B. Arrow function (try, catch, finally) to Get Quotes from Ninjas Quote api
  const fetchQuote = async () => {
    setLoading(true);
    const maxRetries = 15; // Set a limit for the number of retries
    let attempt = 0;

    // 1. Try
    // Getting data from API
    try {
      let foundQuote = null;
      while (!foundQuote && attempt < maxRetries) {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes",
          {
            headers: {
              "X-Api-Key": import.meta.env.VITE_API_NINJAS_QUOTE_KEY,
            },
          }
        );

        // Filter quotes by max length client-side
        const filteredQuotes = response.data.filter(
          (quote) => quote.quote.length <= 200
        );
        foundQuote = filteredQuotes[0];

        // Increment the attempt counter
        attempt++;

        // If found, set the quote
        if (foundQuote) {
          setQuote(foundQuote);
        }
      }

      // If no suitable quote is found after the maximum retries, set a fallback message
      if (!foundQuote) {
        setQuote({
          quote: "No quote found! Never give up. Just RESET amd try again...",
        });
      }
      // 2. Catch and display Failed to load uote
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({ quote: "Failed to load quote. Hit reset" });

      // 3. finally
    } finally {
      setLoading(false);
    }
  };

  // C. Run a useEffect hook that runs fetchQuote for Ninjas Quotes above
  useEffect(() => {
    fetchQuote();
  }, []);

  // III. The HTML that utilizes Javascript client-side logic
  return (
    <div id="quote-container" className="quote-container">
      <h3>Quote for Today</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="quote" className="quote-content">
          <p className="quote">&quot;{quote.quote}&quot;</p>
          <p className="quote-author">-{quote.author}-</p>
          <LotteryGenerator />
        </div>
      )}
    </div>
  );
}

export default QuoteComponent;
