import React, { Component } from 'react'
import { HashRouter as Router, Link } from '../react-router-dom';
// import { HashRouter as Router, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/home">首页</Link>
          <Link to="/user">用户</Link>
          <Link to="/profile">个人设置</Link>
          <div>
            {this.props.children}
          </div>
        </div>
      </Router>
    )
  }
}
