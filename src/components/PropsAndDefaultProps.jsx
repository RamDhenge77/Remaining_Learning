import React from 'react'

const PropsAndDefaultProps = (props) => {
  return (
    <div>
      <h3>Props And DefaultProps</h3>
      <div className='mt-5'>
        <h5 className='my-2'>This is {props.received}</h5>
        <h5>{props.defaultName}</h5>
      </div>
    </div>
  )
}

PropsAndDefaultProps.defaultProps = {
  defaultName : "This is Default Props"
}

export default PropsAndDefaultProps
