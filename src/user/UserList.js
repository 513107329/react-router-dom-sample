import React, { Component } from 'react'
import { Link, Switch } from '../router';

export default class UserList extends Component {
  render() {
    return (
      <div>
        <li><Link to="/user/detail/1">1</Link></li>
        <li><Link to="/user/detail/2">2</Link></li>
        <li><Link to="/user/detail/3">3</Link></li>
      </div>
    )
  }
}
