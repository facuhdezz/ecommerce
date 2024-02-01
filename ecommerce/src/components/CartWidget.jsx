import Cart from "../assets/shopping-bag.svg";
import CartLight from "../assets/shopping-bag-light.svg";

const CartWidget = () => {
    return (
        <div className="d-inline-flex gap-4 align-items-center cartWidget">
            <button type="button" className="cartButton">
                <span className="badge rounded-pill bg-danger cartNotification">
                    1
                </span>
                <img src={Cart} alt="Icono bolsa de compras" className="cart dark-icons" />
                <img src={CartLight} alt="Icono bolsa de compras" className="cart light-icons" />
            </button>
            <h4>Carrito de compras</h4>
        </div>
    )
}

export default CartWidget;