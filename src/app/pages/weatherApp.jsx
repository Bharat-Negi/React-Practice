import { Link } from 'react-router-dom'

function WeatherApp (){
    return(
        <>
            <Link to="/" className="backtohome">Back to home page</Link>
            Weather App
        </>
    )
}

export default WeatherApp;