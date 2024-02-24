import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import trash from "../assets/trash.svg"
import trashLight from "../assets/trash-light.svg"
import { Link } from "react-router-dom";
import Content from "./complementos/Content"

const Cart = () => {
    const { cart, removeProduct, clearCart, totalProduct, totalPrice } = useContext(CartContext);
    const envio = 5;

    if (cart.length == 0) {
        return (
            <section className="cartPage">
                <h1 className="titulos text-center">Carrito de compras</h1>
                <h2 className="subt text-center">Lo sentimos</h2>
                <h1 className="titulos text-center alert">No se encontraron productos</h1>
                <Content />
            </section>
        )
    }

    return (
        <section className="cartPage">
            <h1 className="titulos text-center">Carrito de compras</h1>
            <article>
                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.idx}>
                                    <th><Link to={"/item/" + product.id}><img src={product.img} alt={product.nombre} className="imgProduct" /></Link></th>
                                    <th><Link to={"/item/" + product.id}>{product.nombre}</Link></th>
                                    <th>{product.moneda} {product.precio}</th>
                                    <th>{product.cantidad}</th>
                                    <th>{product.moneda} {product.precio * product.cantidad}</th>
                                    <th onClick={() => { removeProduct(product.idx) }}><img src={trash} className="trash dark-icons" alt="borrar elemento" /><img src={trashLight} className="trash light-icons" alt="borrar elemento" /></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="cartTotal d-flex flex-column gap-3">
                        <h2 className="mb-3">Totales del carrito</h2>
                        <h5>Sub Total: <br /><span>USD {totalPrice()}</span></h5>
                        <h5>Costo de envío: <br /><span>USD {envio.toFixed(2)}</span></h5>
                        <h5>Total: <br /><span>USD {totalPrice() + envio}</span></h5>
                        <div className="btnEnd">
                            <Link to={"/checkout"}><button type="button" className="btnCart">Terminar compra</button></Link>
                        </div>
                        <div className="btnContinue">
                            <Link to={"/"}><button type="button" className="btnCart">Seguir explorando</button></Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Cart;
