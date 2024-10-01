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
                <li>
                    <Link to="/gridSlider">Grid Slider</Link>
                </li>
                <li>
                    <Link to="/AddEditDelete">Add Edit Delete</Link>
                </li>
                <li>
                    <Link to="/TabSection">Tab Section</Link>
                </li> 
                <li>
                    <Link to="/CascadingDropdown">Cascading Dropdown</Link>
                </li>
                <li>
                    <Link to="/propsUse">Props Use</Link>
                </li>
                <li>
                    <Link to="/TextForm">State and Events</Link>
                </li>       
            </ul>
        </div>            
        </>
    )
}

export default MenuSection;