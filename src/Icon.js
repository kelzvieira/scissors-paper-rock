import React, { Component } from 'react';

class Icon extends Component {
  constructor(props) {
    super(props)

    this.handleHandIcon = this.handleHandIcon.bind(this);
  }

  handleHandIcon() {
    this.props.onChoose(this.props.iconId)
  }

  render() {
    return (
        <div className='icon' icon={this.props.iconId} onClick={this.handleHandIcon}>
          {this.props.icon}
          <div className='icon-text'>{this.props.iconId}</div>
        </div>
    )
  }
}

export default Icon
