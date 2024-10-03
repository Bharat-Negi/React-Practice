import React, { useState } from 'react'
import DarkToggle from './darkToggle'
import AlertFile from './alertFile'

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

    const wordMin = 0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length;

    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
        } else {
            setMode('light');
        }
    }

  return (
    <>      
        <AlertFile />
        <div className={`mt-5 container py-3 mode-${mode}`}>
            <h4 className='d-flex justify-content-between'>
                {props.heading}
                <DarkToggle toggleMode={toggleMode} />        
            </h4>
            <div className="form-group mb-3">
                <label className='mb-2'>{props.labelName}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <div className='d-flex gap-2'>
                <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length===0} type="button" className="btn btn-success" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length===0} type="button" className="btn btn-danger" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button disabled={text.length===0} type="button" className="btn btn-secondary" onClick={handleCopyClick}>
                    Copy Text
                </button>
                <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleExtraSpaceClick}>
                    Remove Extra Space
                </button>
            </div>

            <div className='col-md-12 mt-3'>
                <h4>Heading</h4>
                <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} Words, {text.length} characters</p>
                <p>{wordMin.toFixed(3)} Minutes Read</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text:"Nothing to preview"}</p>
            </div>           
        </div>
        
    </>
  )
}

export default TextFormUse