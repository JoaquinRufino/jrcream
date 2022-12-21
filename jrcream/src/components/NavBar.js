import './Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div className="Navbar-container">
        <h1 className='titulo'>Jr Cream</h1>
        <a className='button-navbar'>Inicio</a>
        <a className='button-navbar'>Comprar</a>
        <CartWidget/>
    </div>;
};

export default NavBar;