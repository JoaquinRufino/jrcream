import { useParams } from "react-router-dom";
import Card from "./Card";


const SelectedCard = ({productos}) => {
    const {cardid}= useParams()
    const selectedProduct = productos.productos.find((card)=> card.id === cardid)
  return (
    <div>
        <Card productos={selectedProduct} />
    </div>
  )
}

export default SelectedCard;