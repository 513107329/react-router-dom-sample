import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Link extends Component {
  static contextTypes = {
    history: PropTypes.object
  }
  render() {
    const { to } = this.props;
    return (
      <a onClick={() => this.context.history.push(to)}>{this.props.children}</a>
    )
  }
}
