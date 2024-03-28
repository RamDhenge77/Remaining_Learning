import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const activeClass = ({ isActive }) => {
        return {
            color: isActive ? "red" : ""
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Learning</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink style={activeClass} className="nav-link active" aria-current="page" to="/funVsClass">Function Vs. Class</NavLink>
                            <NavLink style={activeClass} className="nav-link" to="/props&DefaultProps">Props & DefaultProps</NavLink>
                            <NavLink style={activeClass} className="nav-link" to="/events">Events</NavLink>
                            <NavLink style={activeClass} className="nav-link" to="/higherOrderComponent" >HOC</NavLink>
                        </div>
                    </div>
                    <div className="d-flex">
                        <NavLink to="/login"><button className="btn btn-primary">Login</button></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
