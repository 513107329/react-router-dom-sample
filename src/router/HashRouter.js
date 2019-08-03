import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HashRouter extends Component {
  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || "/",
        state: {}
      }
    }
  }
  getChildContext() {
    const _this = this;
    return {
      location: this.state.location,
      history: {
        push(path) {
          if (typeof path === 'object') {
            let { pathname, state } = path;
            _this.setState(prevState => ({ location: { ...prevState.location, state } }));
            window.location.hash = pathname;
          } else {
            window.location.hash = path
          }
        }
      }
    }
  }

  componentDidMount() {
    window.location.hash = window.location.hash.slice(1) || '/';
    let render = () => {
      this.setState(prevState => ({ location: {...prevState.location, pathname: window.location.hash.slice(1) || '/'}}))
    }
    window.addEventListener("hashchange", render)
  }

  render() {
    return this.props.children ? React.Children.only(this.props.children) : null
  }
}
