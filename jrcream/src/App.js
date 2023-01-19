import './components/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from "react-router-dom";
import Cards from './components/Cards';
import SelectedCard from './components/SelectedCard';
import { db } from './db/firebase-config';
import {collection, doc, getDocs} from "firebase/firestore";
import { useEffect, useState } from 'react';


function App() {
  const productosCollectionRef = collection(db,"productos");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState({});
  
  const getProducts = async () => {
    const data = await getDocs(productosCollectionRef);
    setProductos(data.docs.map ((doc) => ({...doc.data() , id: doc.id})));
    setLoading (false);
  };

  const getProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDocs(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }else {
      console.log("No existe el documento");
    }
  }

  useEffect (() => {
    getProducts();
  }, []);
  
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/comprar" element={<Cards />} />
          <Route path="comprar/:cardid" element={<SelectedCard />} />
        </Routes>
    </div>
  );
}


export default App;
