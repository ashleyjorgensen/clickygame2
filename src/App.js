import React, { Component } from "react";
import "./App.css";
import PuppyCard from "./components/PuppyCard/PuppyCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import puppycards from "./puppycards.js";

class App extends Component {
  state = {
    puppycards,
    score: 0,
    topScore: 0
  };

  shufflePups = puppies => {
    var j, x, i;
    for (i = puppies.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = puppies[i];
      puppies[i] = puppies[j];
      puppies[j] = x;
    }
    return puppies;
  };

  handleCorrectGuess = newData => {
    const { score, topScore } = this.state;
    const newScore = score + 1;
    let newTopScore = 0;
    if (newScore > topScore) {
      newTopScore = newScore;
    } else {
      newTopScore = topScore;
    }

    this.setState({
      puppycards: this.shufflePups(newData),
      score: newScore,
      topScore: newTopScore
    });
    
  };

  handleIncorrectGuess = newData => {
    this.setState({
      score: 0,
      puppycards: this.shufflePups(newData)
    });
    // shuffle the cards
  };
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.puppycards.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      console.log(newItem);
      return newItem;
    });

    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        {this.state.puppycards.map(puppycard => (
          <PuppyCard
            handleClick={this.handleItemClick}
            id={puppycard.id}
            key={puppycard.id}
            image={puppycard.image}
          />
        ))}
      </div>
    );
  }
}

export default App;



