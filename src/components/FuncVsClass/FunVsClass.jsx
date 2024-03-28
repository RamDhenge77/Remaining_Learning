import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const FunVsClass = () => {

  const navigate = useNavigate();

  const active = ({ isActive }) => {
    return {
      color: isActive ? "white" : "gray",
      padding: ".8vh 1.6vh",
      fontWeight: isActive ? "bold" : "",
      borderRadius: "2.8vh",
      background: isActive ? "#ff7070" : ""
    }
  }

  useEffect(() => {
    navigate('/funVsClass/function')
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h4>Function Vs. Class Component</h4>
      <div className='mt-4'>
        <div className='d-flex'>
          <NavLink to='function' className='text-decoration-none' style={active}>Function</NavLink>
          <NavLink to='class' className='mx-3 text-decoration-none' style={active}>Class</NavLink>
        </div>
      </div>
      <div className='mt-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default FunVsClass
