import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {
    handleClick = () => {
        localStorage.setItem('login', true);
        this.props.history.push(this.props.location.state.from)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>登陆</button>
            </div>
        )
    }
}
