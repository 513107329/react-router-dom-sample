import React, { Component } from 'react'
import { HashRouter as Router, Link } from '../router';
// import { HashRouter as Router, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/home"><span style={{ marginRight: 20 }}>首页</span></Link>
          <Link to="/user"><span style={{ marginRight: 20 }}>用户</span></Link>
          <Link to="/profile"><span style={{ marginRight: 20 }}>个人设置</span></Link>
          <div>
            {this.props.children}
          </div>
        </div>
      </Router>
    )
  }
}
