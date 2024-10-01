import React from 'react'
import PropTypes from 'prop-types'

const propsUsePage = (props) => {
  return (
    <div className='mt-5 container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">{props.link1} <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.link2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.pricing}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}

propsUsePage.propTypes = {
  title: PropTypes.string,
  pricing: PropTypes.string
}

propsUsePage.defaultProps = {
  title: "Bharat default",
  pricing: "Pricing default",
  link1: "Home default",
  link2: "Features default"
}

export default propsUsePage;
