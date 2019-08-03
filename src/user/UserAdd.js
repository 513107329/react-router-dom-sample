import React, { Component } from 'react'

export default class UserAdd extends Component {
  handleClick = () => {
    this.props.history.push("/user/list")
  }
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.handleClick}>添加用户</button>
      </div>
    )
  }
}
