import './components/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from "react-router-dom";
import productos from './producto.json';
import Cards from './components/Cards';
import SelectedCard from './components/SelectedCard';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="comprar/:cardid" element={<SelectedCard productos={productos}/>} />
        </Routes>
      
    </div>
  );
}

export default App;
