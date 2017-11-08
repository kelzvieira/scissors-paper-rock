import React, { Component } from 'react';
import './App.css';
import Icon from './Icon.js';
import Computer from './Computer';
import User from './User';
import Result from './Result';
import Scoreboard from './Scoreboard';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      computerChoices: [],
      userChoices: [],
      matchOutcome: [],
      numberOfMatches: 0
    }
    this.handleUserChoice = this.handleUserChoice.bind(this)
    this.computerChoice = this.computerChoice.bind(this)
  }

  handleUserChoice(icon) {
    this.state.userChoices.push(icon)
    this.computerChoice()

    this.setState({
      userChoices: this.state.userChoices,
      numberOfMatches: this.state.numberOfMatches +1
    })
    if (icon == 'scissors') {
      console.log("User picked Scissors")
    } else if (icon == 'paper') {
      console.log("User picked Paper")
    } else {
      console.log("User picked Rock")
    }
    console.log(this.state.userChoices)
  }

  computerChoice() {
    const randomNumber = Math.floor(Math.random()*3+1)
    if (randomNumber === 1) {
      this.state.computerChoices.push('scissors')
    }  else if (randomNumber === 2) {
      this.state.computerChoices.push('paper')
    } else {
      this.state.computerChoices.push('rock')
    }
    this.setState({
      computerChoices: this.state.computerChoices
    })
    console.log(this.state.computerChoices)
  }

  render() {
    return (

      /* Recreate the classic game of chance; Rock, Paper, Scissors!
      It's User vs Computer, and only the luckiest will survive.

      Requirements:

      Display a selection of three choices: Rock, Paper or Scissors
      Allow the User to select a choice
      Generate a random choice for the Computer
      Compare the User and Computer choice to declare a winner
      Allow the User to play again without refreshing the page

      Bonus Requirements:

      Track the results of each game
      Display how many times the User and Computer have won
      Add a high score for the User's highest winning streak. */

      <div>
        <div className='options'>
          <div className='App-header'>
            <h1 className='App-title'>Choose your weapon:</h1>
          </div>
            <Icon iconId='scissors' icon='✌️' onChoose={this.handleUserChoice}/>
            <Icon iconId='paper' icon='🖐' onChoose={this.handleUserChoice}/>
            <Icon iconId='rock' icon='👊' onChoose={this.handleUserChoice}/>
        </div>
        <div className='result'>
          <User userChoice={this.state.userChoices[this.state.numberOFMatches + 1]}/>
          <Computer computerChoice={this.state.computerChoices[this.state.numberOFMatches + 1]}/>
          <Result matchOutcome={this.state.matchOutcome[this.state.numberOFMatches + 1]}/>
        </div>
      </div>
    );
  }
}

export default App;
