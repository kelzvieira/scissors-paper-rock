import React, { Component } from 'react';

class Computer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result'>
        <h2>Computer's Choice:</h2>
        <div class='icon'>{this.props.icon}</div>
      </div>
    )
  }
}

export default Computer
