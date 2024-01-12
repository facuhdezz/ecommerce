import Cart from "../assets/shopping-bag.svg";

const CartWidget = () => {
    return (
        <div className="d-inline-flex gap-4 align-items-center">
            <button type="button" className="cartButton">
                <img src={Cart} alt="Icono bolsa de compras" className="cart" />
                <span className="badge rounded-pill bg-danger cartNotification">
                    1
                </span>
            </button>
            <h4>Carrito de compras</h4>
        </div>
    )
}

export default CartWidget;