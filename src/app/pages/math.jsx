import React from "react";
import { Link } from 'react-router-dom'
import {add, sub, mult, div} from '../controller/mathCont'

function MathPart() {
    return(
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            <div className="timefull-wrap">
                <ul className="mathCss">
                    <li>Sum of two is = {add(10,8)}</li>
                    <li>Sub of two is = {sub(10,8)}</li>
                    <li>Div of two is = {mult(10,8)}</li>
                    <li>Mult of two is = {div(10,3)}</li>
                </ul>
            </div>
        </>
    )
}

export default MathPart;