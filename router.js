import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Route, Switch, Protected } from '../react-router-dom';
import App from './app';
import User from './User';

let Home = () => <div>首页</div>
let Profile = () => <div>个人设置</div>

export default class Index extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Protected path="/profile" component={Profile} />
        </Switch>
      </App>
    )
  }
}