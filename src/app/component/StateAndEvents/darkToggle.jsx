import React from 'react'
// import TextFormUse from './TextFormUse';

const darkToggle = (props) => {
  return (
    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
    </div>
  )
}

export default darkToggle;
