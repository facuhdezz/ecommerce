import Cart from "../assets/shopping-bag.svg";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="cartButton">
                <img src={Cart} alt="Icono bolsa de compras" className="cart" />
                <span className="badge rounded-pill bg-danger cartNotification">
                    1
                </span>
            </button>
        </div>
    )
}

export default CartWidget;