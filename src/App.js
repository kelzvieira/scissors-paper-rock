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
    this.userChoice = this.userChoice.bind(this)
    this.computerChoice = this.computerChoice.bind(this)
    this.handleMatchResult = this.handleMatchResult.bind(this)
  }

  userChoice(icon) {
    this.state.userChoices.push(icon)
    this.setState({
      userChoices: this.state.userChoices
    })
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
  }

  handleMatchResult(icon) {
    this.userChoice(icon)
    this.computerChoice()

    if (this.state.userChoices[this.state.numberOfMatches] === 'scissors') {
      if (this.state.computerChoices[this.state.numberOfMatches] === 'scissors') {
        this.state.matchOutcome.push('tie')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'rock') {
        this.state.matchOutcome.push('computer wins')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'paper') {
        this.state.matchOutcome.push('user wins')
      } else {
        return 'Whoops, something went wrong.'
      }
    } else if (this.state.userChoices[this.state.numberOfMatches] === 'paper') {
      if (this.state.computerChoices[this.state.numberOfMatches] === 'paper') {
        this.state.matchOutcome.push('tie')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'scissors') {
        this.state.matchOutcome.push('computer wins')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'rock') {
        this.state.matchOutcome.push('user wins')
      } else {
        return 'Whoops, something went wrong.'
      }
    } else if (this.state.userChoices[this.state.numberOfMatches] === 'rock') {
      if (this.state.computerChoices[this.state.numberOfMatches] === 'rock') {
        this.state.matchOutcome.push('tie')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'paper') {
        this.state.matchOutcome.push('computer wins')
      } else if (this.state.computerChoices[this.state.numberOfMatches] === 'scissors') {
        this.state.matchOutcome.push('you win')
      } else {
        return 'Whoops, something went wrong.'
      }
    } else {
      return 'Whoops, something went wrong.'
    }
    this.setState({
      numberOfMatches: this.state.numberOfMatches +1
    })
  }

  render() {
    return (

      /* Bonus Requirements:

      Track the results of each game
      Display how many times the User and Computer have won
      Add a high score for the User's highest winning streak. */

      <div>
        <div className='options'>
          <div className='App-header'>
            <h1 className='App-title'>Choose your weapon:</h1>
            <div className='weapons'>
              <Icon iconId='scissors' icon='✌️' onChoose={this.handleMatchResult}/>
              <Icon iconId='paper' icon='🖐' onChoose={this.handleMatchResult}/>
              <Icon iconId='rock' icon='👊' onChoose={this.handleMatchResult}/>
            </div>
          </div>
        </div>
        <div className='result-container'>
          <User userChoice={this.state.userChoices[this.state.userChoices.length -1]}/>
          <Computer computerChoice={this.state.computerChoices[this.state.computerChoices.length -1]}/>
          <Result matchOutcome={this.state.matchOutcome[this.state.matchOutcome.length -1]}/>
        </div>
      </div>
    );
  }
}

export default App;
