import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.counter}</h5>
      </div>
    )
  }
}
