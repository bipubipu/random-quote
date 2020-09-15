import React from "react";
import { FaTwitterSquare } from "react-icons/fa";

const Quote = (props) => (
  <>
    <div id="text" className="font-weight-bold text-monospace">
      {props.quote}
    </div>
    <div id="author" className="text-right">
      {props.author}
    </div>

    <a id="tweet-quote" href="https://twitter.com/intent/tweet">
      <FaTwitterSquare size="6vw" color={props.color} />
    </a>
    <button
      id="new-quote"
      onClick={props.assignIndex}
      style={{ backgroundColor: props.color }}
    >
      New Quote
    </button>
  </>
);
export default Quote;
