import React, { Component } from 'react';

class Computer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result-inner'>
        <h3>Computer's Choice:</h3>
        <div className='result-text'>{this.props.computerChoice}</div>
      </div>
    )
  }
}

export default Computer
