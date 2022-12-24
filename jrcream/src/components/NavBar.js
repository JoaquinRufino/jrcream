import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return <div className="Navbar-container">
        <h1 className='titulo'>Jr Cream</h1>
        <Link to="/">
        <h2 id='button-navbar'>Inicio</h2>
        </Link>
        <CartWidget/>
    </div>;
};

export default NavBar;