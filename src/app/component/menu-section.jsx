import { Link } from 'react-router-dom'

function MenuSection(){
    return(
        <>
        <div className="container">
            <ul className="menu_bar">
                <li>
                    <Link to="/time-MAN">Time MAN</Link>
                </li>
                <li>
                    <Link to="/math">Math Page</Link>
                </li>
                <li>
                    <Link to="/cardPage">Card Page</Link>
                </li>                 
            </ul>
        </div>            
        </>
    )
}

export default MenuSection;