import MobileNavigation from "./MobileNavigation"
import Navigation from "./Navigation"



function Header() { 
    return (
        <nav className='NavBar'>
            <MobileNavigation />
            <Navigation/>
        </nav>
    )
}

export default Header