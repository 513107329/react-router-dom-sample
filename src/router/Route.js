import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  render() {
    let { path, component: Component, render, children } = this.props;
    this.keys = [];
    this.regexp = pathToRegexp(path, this.keys, { end: false });
    this.keys = this.keys.map(item => item.name)
    let { location, history } = this.context;
    let result = location.pathname.match(this.regexp);
    let props = {
      location, history
    };
    if (result) {
      let [url, ...values] = result;
      props.match = {
        params: this.keys.reduce((total, value, idx) => {
          total[value] = values[idx];
          return total
        }, {}),
        url,
        path
      }
      if (Component) {
        return <Component {...props} />
      } else if (render) {
        return render(props)
      } else {
        if (children) {

        } else {
          return null
        }
      }
    } else {
      if (children) {

      } else {
        return null
      }
    }
  }
}
