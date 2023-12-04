import "./App.css";
import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { IoMdShare } from "react-icons/io";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };
  const [active, setActive] = useState(false);
  console.log(quote);
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <button className="icon" onClick={(e) => setActive(!active)}>
            <IoMdShare />
          </button>
        </div>
        {active && (
          <div className="share">
            <FacebookShareButton
              url={`https://api.quotable.io/quotes/${quote._id}`}
              quote="it is possible"
              hashtag="#power"
            >
              <FacebookIcon size={35} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton
              url={`https://api.quotable.io/quotes/${quote._id}`}
            >
              <WhatsappIcon size={35} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              url={`https://api.quotable.io/quotes/${quote._id}`}
            >
              <TwitterIcon size={35} round={true} />
            </TwitterShareButton>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
