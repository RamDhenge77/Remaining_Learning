import React from 'react'
import HigherOrderFunc from './HigherOrderFunc'

const HOC = (props)=> {
  return (
    <div>
      <h3>Higher Order Component</h3>
      <div className='mt-5'>
        <h5>{props.counter}</h5>
        <button className='mt-3 btn btn-primary' onClick={props.onClick}>Click</button>
      </div>
    </div>
  )
}

export default HigherOrderFunc(HOC)
