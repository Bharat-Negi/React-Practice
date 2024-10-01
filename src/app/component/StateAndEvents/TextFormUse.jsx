import React, { useState } from 'react'

const TextFormUse = (props) => {

    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
    <>
        <div className='mt-5 container'>
            <h4>{props.heading}</h4>
            <div className="form-group mb-3">
                <label className='mb-2'>{props.labelName}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange}  rows="6"></textarea>
            </div>
            <div className='d-flex gap-2'>
                <button type="button" class="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" class="btn btn-success" onClick={handleLowClick}>Convert to Lowercase</button>
                <button type="button" class="btn btn-danger" onClick={handleClearClick}>Clear Text</button>
            </div>            
        </div>
        <div className='mt-3 container'>
            <h4>Heading</h4>
            <p>{text.split(" ").length} Words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextFormUse