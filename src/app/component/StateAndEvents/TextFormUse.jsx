import React, { useState } from 'react'

const TextFormUse = (props) => {

    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div className='mt-5 container'>
        <h4>{props.heading}</h4>
        <div className="form-group mb-3">
            <label className='mb-2'>{props.labelName}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange}  rows="8"></textarea>
        </div>
        <button type="button" class="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

export default TextFormUse