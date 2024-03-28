import React, { useState } from 'react'

const HigherOrderFunc = (HOC)=> {
  const NewComponent = ()=>{
    const [count, setCount] = useState(0);

    const handleClick = ()=>{
      setCount(count+1);
    }

    return <HOC onClick={handleClick} counter={count} />
  }
  return NewComponent
}

export default HigherOrderFunc
