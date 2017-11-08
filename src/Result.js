import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result-announcement'>
        <div className='result-header'>And the winner is:</div>
        <div class='icon'>{this.props.matchOutcome}</div>
      </div>
    )
  }
}

export default Result
