import React, { Component } from 'react'
import Counter from './Counter';
import Child from './Child';

export default class Class extends Component {

  constructor() {
    super();
    this.state = {
      mount: "",
      count: 0
    }
  }

  componentDidMount() {
    this.setState({ mount: "Component Mounted" })
  }

  // binding with arrow fun
  increament = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleSubmit(name) {
    alert("Hello " + name)
  }

  render() {
    return (
      <div>
        <h4>Using Class</h4>
        <div className='mt-5'>
          <p>{this.state.mount}</p>
          <Counter counter={this.state.count} />
          <button className='btn btn-primary' onClick={this.increament}>Click me</button>
          <div className='mt-5 w-25'>
            <Child handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}
