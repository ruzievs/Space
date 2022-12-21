import Navlinks from "./Navlinks"
import logo from '../../assets/svg/logo.png';
import { Link } from 'react-router-dom'



function Navigation() { 
    return (
        <nav className='Navigation'>
            <Link to='/' className="nav__logo"><img className="nav__banner" src={logo} alt="" /></Link>
           <Navlinks/>
        </nav>
    )
}

export default Navigation