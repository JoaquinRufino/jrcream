import { Link, useLocation } from "react-router-dom";


const Card = ({productos}) => {
    const path = useLocation().pathname;
  return (
    <div className="article-ropa1 card">
        <img className='ropa' src={productos.imagen}/>
        <div className="div-card">
            <p className="card-text">{productos.descripcion} {productos.precio}</p>
            {path === "/comprar" ? (
            <Link to={`/comprar/${productos.id}`}>
            <button id={productos.id} href="#">Ver producto</button>
            </Link>) : (
                <Link to={`/comprar/cart`}>
                <button>Comprar</button>
                </Link>
                
            )}
        </div>
    </div>
    );
};

export default Card;