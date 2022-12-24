import './App.css';
import Card from './Card';

function Cards ({productos}){
    return ( <div className="Card_container">
        {productos.map((productos)=>(
        <Card key={productos.id} productos={productos}/>
        ))}
    </div>
    );
}

export default Cards;