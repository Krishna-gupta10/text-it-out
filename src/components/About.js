import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
     <p>{props.title} is a simple quick-use tool {props.description}</p> 
      <p>This application is created using ReactJS.</p>
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

