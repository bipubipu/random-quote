import React, { Component } from "react";
import "./App.css";
import Quote from "./components/Quote";

class App extends Component {
  state = {
    quotes: [],
    selectedQuote: null,
    colors: [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ],
    selectedColor: null,
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState({ quotes: quotes.quotes }, this.assignIndex)
      );
  }
  assignIndex = () => {
    const [quote, color] = this.getRandomNumber();
    this.setState({ selectedQuote: quote, selectedColor: color });
  };
  getRandomNumber = () => {
    return [
      Math.floor(Math.random() * this.state.quotes.length),
      Math.floor(Math.random() * this.state.colors.length),
    ];
  };

  render() {
    if (this.state.selectedQuote == null) return null;
    else {
      const { quotes, selectedQuote, selectedColor } = this.state;
      const { quote, author } = quotes[selectedQuote];
      const color = this.state.colors[selectedColor];
      return (
        <div id="quote-box" className="p-5 text-center" style={{ color }}>
          <Quote
            quote={quote}
            author={author}
            assignIndex={this.assignIndex}
            color={color}
          />
        </div>
      );
    }
  }
}
export default App;
