import { Link } from 'react-router-dom'
import CardDataPage from '../controller/card-data-page'
import Cdata from '../data-file/Cdata'

function ncard(val){
    console.log(val);

    return(
        <CardDataPage
            cimage={val.cimage}
            cname={val.cname}
            cprotext={val.cprotext}
            cproductlink={val.cproductlink}
            clink={val.clink}
            canother={val.canother}
        />
    )
}

function CardPage() {
    return (
        <>
            <Link to="/" className="backtohome">Back to home page</Link>

            <h1 className="cardHeading">
                Card Looping with .jsx file.
            </h1>          

            <div className="container">
                <div className="row">
                    {Cdata.map(ncard)}
                </div>
            </div>    
        </>
    )
}

export default CardPage;