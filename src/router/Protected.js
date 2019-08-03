import React, { Component } from 'react'
import Route from './Route'
import Redirect from './Redirect'

export default function ({ component: Component, ...rest }) {
    return <Route {...rest} render={props => (
        localStorage.getItem("login") ?
            (<Component {...props} />)
            : (<Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />)
    )} />
}
