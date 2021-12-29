import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className="HomeNav"> Welcome </Link>
                <Link to="/Login" className="LoginNav"> Login </Link>
            </nav>
        </div>
    )
}

export default Navbar
