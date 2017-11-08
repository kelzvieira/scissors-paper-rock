import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result'>
        <h2>And the winner is:</h2>
        <div class='icon'>{this.props.icon}</div>
      </div>
    )
  }
}

export default Result
