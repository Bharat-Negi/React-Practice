import React from "react";

function cardDataPage(props) {
    return (
        <>
            <div className="col-md-3">
                <div className="card">
                    <img className="card-img-top" src={props.cimage} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.cname}</h5>
                        <p className="card-text">{props.cprotext}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.cproductlink}</li>
                    </ul>
                    <div className="card-body">
                        <a href={props.clink} className="card-link">Card link</a>
                        <a href={props.canother} className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardDataPage;