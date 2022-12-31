import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import producto from "../producto.json";



function Cards (){
    const [productos, setProductos] = useState([]);
        const getProducts = () => {
            return new Promise ((resolve)=>{
                setTimeout(()=>{
                    resolve(producto)
                }, 100);
            })
        }
        useEffect (()=> {
            getProducts()
            .then((res)=> setProductos(res.productos))
        }, []);

        return ( <div className="Card_container">
        {productos.map((productos)=>(
        <Card key={productos.id} productos={productos}/>
        ))}
    </div>
    );
}

export default Cards;