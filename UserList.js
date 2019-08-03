import React, { Component } from 'react'
import { Link, Switch } from '../react-router-dom';

export default class UserList extends Component {
  render() {
    return (
      <div>
        <Link to="/user/detail/1">1</Link>
        <Link to="/user/detail/2">2</Link>
        <Link to="/user/detail/3">3</Link>
      </div>
    )
  }
}
