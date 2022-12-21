import './Header.scss'
import { Link } from 'react-router-dom'

function Navlinks(props) {
    return (
        <header className='header'>
            <nav className="nav">
                <div className="container nav__container">
                    <ul className="nav__list">
                        <li onClick={() => props.isMobile && props.closeMobileMenu()} className="nav__item">
                            <Link to="/" className="nav__link">HOME</Link>
                        </li >
                        <li onClick={() => props.isMobile && props.closeMobileMenu()} className="nav__item">
                            <Link to="/destination" className="nav__link">DESTINATION</Link>
                        </li>
                        <li onClick={() => props.isMobile && props.closeMobileMenu()} className="nav__item">
                            <Link to="/crew" className="nav__link">CREW</Link>
                        </li>
                        <li onClick={() => props.isMobile && props.closeMobileMenu()} className="nav__item">
                            <Link to="/technology" className="nav__link">TECHNOLOGY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
       </header>
    )
}
export default Navlinks



