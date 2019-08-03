import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from '../router'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

let UserEdit = () => <div>修改用户</div>

export default class User extends Component {
  render() {
    return (
        <div>
          <Link to="/user/add"><span style={{ marginRight: 20 }}>添加用户</span></Link>
          <Link to="/user/list"><span style={{ marginRight: 20 }}>用户列表</span></Link>
          <Link to="/user/edit"><span style={{ marginRight: 20 }}>编辑用户</span></Link>
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
