import {Navigate, Route, Routes } from "react-router-dom";
import Card from "./Card";

const Comprar = () => {
  return (
    <div>
    <Routes>
    <Route path="/Card/:Id" element={<Card producto={producto} />} />
    <Route path="/" element={<p>Realiza tu compra....</p>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
  )
}

export default Comprar;