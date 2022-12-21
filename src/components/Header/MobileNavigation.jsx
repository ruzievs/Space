import Navlinks from "./Navlinks"
import { useState } from "react"
import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../../assets/svg/logo.png';
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
function MobileNavigation() {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <BiMenuAltRight className="Hamburger"
        size={"40px"} color='white'
        onClick={() => setOpen(!open)} />
    
    const closeIcon = <CgClose className="Hamburger"
        size={"30px"} color='white'
        onClick={() => setOpen(!open)} />
    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className='MobileNavigation'>
            <Link to='/' className="nav__logo"><img src={logo} alt="" /></Link>
            {open ? closeIcon : hamburgerIcon}
            {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}

export default MobileNavigation