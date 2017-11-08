import React, { Component } from 'react';

class Computer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result-inner'>
        <h2>Computer's Choice:</h2>
        <div className='result-text'>{this.props.computerChoice}</div>
      </div>
    )
  }
}

export default Computer
