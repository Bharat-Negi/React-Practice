import React from 'react'
import { Link } from 'react-router-dom';
import PropsUsePage from './propsUsePage';

const pageProps = () => {
  return (
    <>
      <Link to="/" className="backtohome">Back to home page</Link>
      <PropsUsePage 
        title="Bharat New"
        pricing="Pricing New"
        link1= "Home New"
        link2= "Features New"
      />
      <PropsUsePage />
    </>
  )
}

export default pageProps;