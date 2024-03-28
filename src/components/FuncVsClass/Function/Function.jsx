import React, { useEffect, useState } from 'react'
import CounterFun from './CounterFun'

const Function = () => {

  const [mount, setMount] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    setMount("Component Mounted")
  }, [])

  const increament = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h3>Using Function</h3>
      <div className='mt-5'>
        <p>{mount}</p>
        <CounterFun counter={count} />
        <button className='btn btn-primary' onClick={increament}>Click me</button>
      </div>
    </div>
  )
}

export default Function
