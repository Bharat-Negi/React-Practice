import { Link } from 'react-router-dom'

const menu = [
    {
        to:'/time-MAN',
        label:'Time MAN'
    },
    {
        to:'/math',
        label:'Math Page'
    },
    {
        to:'/cardPage',
        label:'Card Page'
    },
    {
        to:'/gridSlider',
        label:'Grid Slider'
    },
    {
        to:'/AddEditDelete',
        label:'Add Edit Delete'
    },
    {
        to:'/TabSection',
        label:'Tab Section'
    },
    {
        to:'/CascadingDropdown',
        label:'Cascading Dropdown'
    },
    {
        to:'/propsUse',
        label:'Props Use'
    },
    {
        to:'/TextForm',
        label:'State and Events'
    }
]

function MenuSection(){
    return(
        <>
        <div className="container">
            <ul className="menu_bar">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link to={item.to}>{item.label}</Link>
                    </li>
                ))}      
            </ul>
        </div>            
        </>
    )
}

export default MenuSection;