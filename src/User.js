import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result-inner'>
        <h2>Your Choice:</h2>
        <div className='result-text'>{this.props.userChoice}</div>
      </div>
    )
  }
}

export default User
