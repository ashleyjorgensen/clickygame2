import React, { Component } from 'react';
import './App.css';
import PuppyCard from "./components/PuppyCard"
import Container from "./components/Container"
import Wrapper from "./components/Wrapper"
import puppycards from "./puppycards.json"


class App extends Component { 
  state = {
    puppycards 
  }
};

// removePuppyCard => {
//   const puppycards = this.state.puppycards.filter(puppycards => puppycards.id);
//   this.setState({ puppycards });
// };

render = () => { 
    return (
    <Wrapper>
      <Title>Cute Puppies</Title>
      {this.state.puppycards.map(puppycards =>(
        <div>PuppyCard  
        remove.PuppyCard={this.removePuppyCard}
        id={puppycard.id}
        key={puppycard.id}
        image={puppycard.image}
        </div>
      ))}
      </Wrapper>
      )
    };
   









export default App;
