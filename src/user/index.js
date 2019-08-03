import React, { Component } from 'react';
import { Route, Switch, Protected } from '../router';
import App from './app';
import User from './User';
import Login from './Login';

let Home = () => <div>首页</div>
let Profile = () => <div>个人设置</div>

export default class Index extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Protected path="/profile" component={Profile} />
        </Switch>
      </App>
    )
  }
}