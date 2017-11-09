import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor(props) {
    super(props)

    this.matchResultsUser - this.matchResultsUser.bind(this)
    this.matchResultsComputer - this.matchResultsComputer.bind(this)
  }

  matchResultsUser(outcome) {
    const userWins = outcome.filter(outcome => {
      return outcome === 'user wins'}).length
      return userWins
  }

  matchResultsComputer(outcome) {
    const computerWins = outcome.filter(outcome => {
      return outcome === 'computer wins'}).length
      return computerWins
  }

  render() {
    return (
      <div className='result'>
        <h2>Scoreboard:</h2>
        <div className='scoreboard'>
        <div>You: {this.matchResultsUser(this.props.matchOutcomes)}</div>
        <div>Computer: {this.matchResultsComputer(this.props.matchOutcomes)}</div>
        <div>Matches played: {this.props.matchOutcomes.length}</div>
        </div>
      </div>
    )
  }

}

export default Scoreboard
