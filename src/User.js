import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class='result-inner'>
        <h3>Your Choice:</h3>
        <div className='result-text'>{this.props.userChoice}</div>
      </div>
    )
  }
}

export default User
