import './components/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Link, Route, Routes } from "react-router-dom";

import producto from './producto.json';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <NavBar/>
      <ItemListContainer/>
      <Route path="/Card/:CardId" element={<Card />} />
      </Routes>
      
    </div>
  );
}

export default App;
