import React, { Component } from 'react'

export default class Child extends Component {

    constructor() {
        super();
        this.state = {
          username: ""
        }
      }

  render() {
    return (
      <div>
        {/* Binding with aurguments */}
        <p className='my-2'>Binding with aurguments and Passing Methods to Child Components</p>
            <input type="text" className='form-control' placeholder='Username...'
              onChange={(e) => { this.setState({ username: e.target.value }) }}
            />
            <button className='btn btn-primary mt-2' onClick={this.props.handleSubmit.bind(this, this.state.username)}>Submit</button>
      </div>
    )
  }
}
