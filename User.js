import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from '../react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

let UserEdit = () => <div>修改用户</div>

export default class User extends Component {
  render() {
    return (
        <div>
          <Link to="/user/add">添加用户</Link>
          <Link to="/user/list">用户列表</Link>
          <Link to="/user/edit">编辑用户</Link>
          <Switch>
            <Route path="/user/add" component={UserAdd}></Route>
            <Route path="/user/edit" component={UserEdit}></Route>
            <Route path="/user/list" component={UserList}></Route>
            <Route path="/user/detail/:id" component={UserDetail}></Route>
          </Switch>
        </div>
    )
  }
}
