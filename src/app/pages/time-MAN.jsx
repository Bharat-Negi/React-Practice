import React from "react";
import { Link } from 'react-router-dom'

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >= 1 && curDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = 'green';
} else if(curDate >= 12 && curDate < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
} else {
    greeting = 'Good Night'
    cssStyle.color = 'black';
}

function TimeMAN() {
    return(
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            <div className="timefull-wrap">
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    )
}

export default TimeMAN;