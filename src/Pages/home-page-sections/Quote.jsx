import { useState, useEffect } from "react";
import quotes from "../../assets/InspirationalQuote.json"
import "../pages-styles/home-sections.css/quote.css"
import QuoteImage from "../../Components/QuoteImage";

export default function QuoteSection() {
    const [randomQuote, setRandomQuote] = useState("");

    useEffect(() => {
        // Generate a random index based on the length of the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.quotes.length);
        // Set the selected quote to the state
        setRandomQuote(quotes.quotes[randomIndex]);
    });

    return (
        <>
            <div className="quote">
                <h2>{`"${randomQuote.quote}"`}</h2>
                <h4>{`- ${randomQuote.author}`}</h4>
                <QuoteImage />
            </div>
        </>
    );
}