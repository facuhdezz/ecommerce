import { Link } from "react-router-dom";

export const BotonAgregarComprar = ({addToCart}) => {
    return (
        <>
            <div className="agregar">
                <button id="agregarCarrito" className="agregarCarrito" onClick={addToCart}>Agregar al carrito</button>
            </div>
            <Link to={"/cart"}> <div className="comprar">
                <button id="agregarCarrito" className="agregarCarrito" onClick={addToCart}>Comprar</button>
            </div> </Link>
        </>
    );
};

export const BotonCarrito = () => {
    return (
        <Link to={"/cart"}> <div className="comprar">
            <button id="irCarrito" className="agregarCarrito">Ir al Carrito</button>
        </div> </Link>
    );
};