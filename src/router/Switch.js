import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp';

export default class Switch extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }

  render() {
    let { location: { pathname: pathname } } = this.context;
    let { children } = this.props;
    for(let i=0;i<children.length;i++) {
      let child = children[i];
      let { path } = child.props;
      if(pathToRegexp(path, [], { end: false }).test(pathname)) {
        return child
      }
    }
    return null
  }
}
