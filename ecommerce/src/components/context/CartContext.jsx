import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (producto, cantidad) => {
        if(isInCart(producto.idx)) {
            let index = cart.findIndex(item => item.idx == producto.idx);
            cart[index].cantidad += cantidad;
            setCart([...cart]);
        } else {
            cart.push({...producto, cantidad: cantidad});
            setCart([...cart]);
        }
    }

    const removeProduct = (idx) => {
        const newCart = cart.filter(item => item.idx != idx);
        setCart([...newCart]);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (idx) => {
        return cart.some(item => item.idx == idx);
    }

    const totalProduct = () => {
        return cart.reduce((cant, item) => cant += item.cantidad, 0)
    }

    const totalPrice = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.precio, 0)
    }

    // const subTotalProduct = (cantidad) => { // incorporé una función nueva para poder usar ItemCount en el Carrito y actualizar el valor del subtotal en el array cart
    //     const cartWithSub = cart.map((item) => {
    //         return{
    //             ...item, subTotal: cantidad * item.precio
    //         }
    //     })
    //     setCart(cartWithSub)
    // }

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, totalProduct, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;