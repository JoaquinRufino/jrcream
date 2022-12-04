import './Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div className="Navbar-container">
        <h1 className='titulo'>Jr Cream</h1>
        <button className='button-navbar'>ropa</button>
        <button className='button-navbar'>Comprar</button>
        <CartWidget/>
    </div>;
};

export default NavBar;