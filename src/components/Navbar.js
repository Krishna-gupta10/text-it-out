import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">{props.link1}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">{props.link2}</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
        </div>
      </div>
    </nav>
  )
}

// Sets the type of the props 
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link2: PropTypes.string,
}

// Sets the default text if not passed in app.js
Navbar.defaultProps = {
  title: 'Navbar Title',
  link1: 'Link 1',
  link2: 'Link 2',
}

