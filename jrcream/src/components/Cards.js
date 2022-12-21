import './App.css';
import productos from '../producto.json';
import Card from './Card';

function Cards (){
    return ( <div className="Card_container">
        {productos.productos.map((productos)=>(
        <Card key={productos.id} productos={productos}/>
        ))}
    </div>
    );
}

export default Cards;