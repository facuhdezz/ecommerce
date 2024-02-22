import { Link } from "react-router-dom";

export const BotonAgregarComprar = ({addToCart}) => {
    return (
        <>
            <div className="agregar">
                <button id="agregarCarrito" className="agregarCarrito" onClick={addToCart}>Agregar al carrito</button>
            </div>
            <div className="comprar">
                <Link to={"/cart"}> <button id="agregarCarrito" className="agregarCarrito" onClick={addToCart}>Comprar</button> </Link>
            </div>
        </>
    );
}

export const BotonCarrito = () => {
    return (
        <div className="comprar">
            <Link to={"/cart"}> <button id="irCarrito" className="agregarCarrito">Ir al Carrito</button> </Link>
        </div>
    );
}