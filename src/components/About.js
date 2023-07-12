import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div className={`container bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} >
     <p>{props.title} is a simple {props.description}</p> 
      <p>Created in ReactJS by - <Link to= 'https://github.com/WoKrishhnaHai'><i className="bi bi-github"></i> Krishna Gupta</Link></p>
    </div>
  )
}

About.propTypes= {
    title: PropTypes.string,
    description: PropTypes.string,
}

About.defaultProps= {
    title: "*App Name Here*",
    description: "*Description Here*"
}

