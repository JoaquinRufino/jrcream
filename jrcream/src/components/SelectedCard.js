import { useParams } from "react-router-dom";
import Card from "./Card";
import producto from "../producto.json";
import { useEffect, useState } from "react";

const SelectedCard = () => {
const {cardid}= useParams()
const [selectedProduct, setSelectedProduct]= useState({})
const getOneProduct = () => {
return new Promise ((resolve)=>{
setTimeout(()=>{
resolve(producto.productos.find((item)=> item.id === cardid))
}, 2000);
})
}
useEffect (()=> {
  getOneProduct()
  .then((res)=> setSelectedProduct(res))
  }, [cardid]);
  
  return (
  <div>
  <Card productos={selectedProduct} />
  </div>
  )
  }
  
  export default SelectedCard;