import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props)
  }

  prettifyResult(outcome) {
    if (outcome === 'tie') {
      return 'Both of you (you also both lost) – it\'s a draw.'
      } else if (outcome === 'computer wins') {
      return 'Not you – sorry, the computer won this one.'
      } else if (outcome === 'user wins') {
      return 'You! You beat this machine! Go you!'
      } else {
      return 'Whoops, looks like something went a bit wrong. Sorry!'
    }
  }

  render() {
    return (
      <div class='result-announcement'>
        <div className='result-header'>And the winner is:</div>
        <div class='result-text'>{this.prettifyResult(this.props.matchOutcome)}</div>
      </div>
    )
  }

}

export default Result
