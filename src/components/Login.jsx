import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userName, setUserName] = useState("")

    const navigate = useNavigate();

    const handleClick = (e)=>{
        e.preventDefault();
        userName ? navigate(`/user/${userName}`)
        :
        alert("Username must be filled")
    }
    return (
        <div className='container mt-5 w-25'>
            <form>
                <h2>Form</h2>
                <div className="mb-3">
                    <div id="emailHelp" className="form-text my-4">This is for demo</div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(e)=>{setUserName(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>e.target.value} />
                </div>
                <button onClick={handleClick} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
