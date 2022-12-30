import './components/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from "react-router-dom";
import Cards from './components/Cards';
import SelectedCard from './components/SelectedCard';



function App() {

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
