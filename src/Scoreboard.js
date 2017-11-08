import React, { Component } from 'react';

class Scoreboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result'>
        <h2>Running tally</h2>
        <div class='icon'>{this.props.icon}</div>
      </div>
    )
  }
}

export default Scoreboard
