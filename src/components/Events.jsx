import React, { useState } from 'react'

const Events = () => {

    const [val, setVal] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        alert("Clicked")
    }

    const handleMouseEnter = () => {
        alert("Mouse Entered")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hello " + val + " !")
    }

    const handleKeyUp = (e)=>{
        setVal(val.toUpperCase());
    }

    return (
        <div>
            <h3>Commonly used Events</h3>
            <div className="conntainer mt-5 w-50">
                <button className='btn btn-primary mx-3 my-4' onClick={handleClick}>onClick</button>
                <button className='btn btn-primary mx-3 my-4' onMouseEnter={handleMouseEnter}>onMouseEnter</button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="input" className="mx-3 mt-5">onSubmit, onChange, onKeyUp Events</label><br />
                    <input type="text" className="mx-3 my-1 p-1" name='input' onChange={(e) => setVal(e.target.value)} onKeyUp={handleKeyUp} value={val} placeholder='Name...' required/> <br />
                    <button className='btn btn-primary btn-sm mt-2 mx-3'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Events
