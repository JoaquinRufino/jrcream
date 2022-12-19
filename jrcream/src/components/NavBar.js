import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <div className="Navbar-container">
        <h1 className='titulo'>Jr Cream</h1>
        <a>Inicio</a>
        <Link to="/Comprar">
        <a className='button-navbar'>Comprar</a>
        </Link>
        <CartWidget/>
    </div>;
};

export default NavBar;