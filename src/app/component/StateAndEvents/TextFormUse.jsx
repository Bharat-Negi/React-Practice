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

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const wordMin = 0.008 * text.split(" ").length;

  return (
    <>
        <div class="position-absolute top-0 start-50 bootAlert">
        <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>
        </div>
        <div className='mt-5 container'>
            <h4 className='d-flex justify-content-between'>
                {props.heading}
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" />
                    <label class="form-check-label">Dark Mode</label>
                </div>
            </h4>
            <div className="form-group mb-3">
                <label className='mb-2'>{props.labelName}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <div className='d-flex gap-2'>
                <button type="button" class="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button type="button" class="btn btn-success" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button type="button" class="btn btn-danger" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button type="button" class="btn btn-secondary" onClick={handleCopyClick}>
                    Copy Text
                </button>
                <button type="button" class="btn btn-info" onClick={handleExtraSpaceClick}>
                    Remove Extra Space
                </button>
            </div>            
        </div>
        <div className='mt-3 container'>
            <h4>Heading</h4>
            <p>{text.split(" ").length} Words, {text.length} characters</p>
            <p>{wordMin.toFixed(3)} Minutes Read</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextFormUse