import React, {createContext, useState} from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

const [cart, setCart] = useState([])

const isInCart = (id) => cart.find((item) => item.id === id);

const  addToCart = (producto, count) => {
    if (isInCart(producto.id)) {
        setCart(cart.map((item) => item.id === producto.id ? {...item, count: item.count + count} : item));
    } else {
        setCart([...cart, {...producto, count}]);
    }
}

const clearCart = () => {
    setCart([]);
}

const removeItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
};

const getTotalPrice = () => {
    return cart.reduce((prev, act) => prev + act.precio * act.count, 0);
};


const getTotalItemCount = () => {
    let total = 0;
    cart.forEach(itemInCart => {
        total += itemInCart.count;
    });
    return total;
};


    return( 
    <>
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItem, getTotalPrice,getTotalItemCount}}>
            {children}
        </CartContext.Provider>
    </>
    );
};

export default CartProvider;