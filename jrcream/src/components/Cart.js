import React, {useContext} from 'react';
import { CartContext } from './Context';

const Cart = () => {
    const {addToCart, getTotalPrice,getTotalItemCount} = useContext(CartContext)
    const handleAddToCart = (count) => {
          addToCart(producto, count);
    }
    const {cart} = useContext(CartContext);

  return (
      <div>{cart.map(item => <h1>{item.price}</h1>)}
      <ItemCount onAddToCart={handleAddToCart}/>
      <h1>Total: ${getTotalPrice()}</h1>
      <h1>Productos:{getTotalItemCount()}</h1>
      </div>
  );
};

export default Cart;