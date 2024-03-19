import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            let index = cart.findIndex(item => item.id == producto.id);
            cart[index].cantidad += cantidad;
            setCart([...cart]);
        } else {
            cart.push({...producto, cantidad: cantidad});
            setCart([...cart]);
        };
    };

    const removeProduct = (id) => {
        const newCart = cart.filter(item => item.id != id);
        setCart([...newCart]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id == id);
    };

    const totalProduct = () => {
        return cart.reduce((cant, item) => cant += item.cantidad, 0)
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.precio, 0)
    };

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, totalProduct, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;