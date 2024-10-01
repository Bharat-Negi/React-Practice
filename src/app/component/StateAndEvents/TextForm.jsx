import React from 'react'
import { Link } from 'react-router-dom'
import TextFormUse from './TextFormUse'

const TextForm = () => {
  return (
    <>
        <Link to="/" className="backtohome">Back to home page</Link>
        <TextFormUse 
            heading="Submit Form" 
            labelName='Text Area' 
        />
    </>
  )
}

export default TextForm