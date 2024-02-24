import Cart from "../assets/shopping-bag.svg";
import CartLight from "../assets/shopping-bag-light.svg";
import trash from "../assets/trash.svg"
import trashLight from "../assets/trash-light.svg"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart, totalProduct, totalPrice, removeProduct, clearCart } = useContext(CartContext);

    return (
        <div className="d-flex flex-column gap-2 mt-4 cartWidget">
            <Link to={"/cart"}><div className="d-inline-flex gap-4 align-items-center cartButtonContainer">
                <button type="button" className="cartButton">
                    <span className="badge rounded-pill bg-danger cartNotification">
                        {totalProduct() > 0 && totalProduct()}
                    </span>
                    <img src={Cart} alt="Icono bolsa de compras" className="cart dark-icons" />
                    <img src={CartLight} alt="Icono bolsa de compras" className="cart light-icons" />
                </button>
                <h4>Carrito de compras</h4>
            </div></Link>
            {cart.length > 0 && <div className="d-flex flex-column gap-4 cartPreview">
                {cart.map(item => (
                    <div className="d-inline-flex gap-3 justify-content-between" key={item.id}>
                        <div className="d-inline-flex gap-2">
                        <img src={item.img} alt={item.nombre} />
                        <div className="d-flex flex-column gap-1">
                            <h4>{item.nombre}</h4>
                            <h3>{item.moneda} {item.precio} x {item.cantidad}u</h3>
                        </div>
                        </div>
                        <button type="button" onClick={() => {removeProduct(item.idx)}}><img src={trash} className="trash dark-icons" alt="borrar elemento" style={{width: "20px"}} /><img src={trashLight} className="trash light-icons" alt="borrar elemento" style={{width: "20px"}} /></button>
                    </div>
                ))}
                <h3>Sub Total: USD {totalPrice()}</h3>
            </div>}
            {cart.length > 0 && <button className="limpiarCarrito" onClick={() => {clearCart()}}>Limpiar Carrito</button>}
        </div>
    )
}

export default CartWidget;