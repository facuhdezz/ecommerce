import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, producto, stock }) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [added, setAdded] = useState(false);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        } else {
            alert('No hay más cantidad disponible');
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= stock) {
            onAdd(contador);
            setContador(1);
            setAdded(true);
            setItemStock(itemStock - contador);
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    useEffect(() => {
        setAdded(false)
    }, [producto])

    const BotonAgregarComprar = () => {
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

    const BotonCarrito = () => {
        return (
            <div className="comprar">
                <Link to={"/cart"}> <button id="irCarrito" className="agregarCarrito">Ir al Carrito</button> </Link>
            </div>
        );
    }

    useEffect(() => { localStorage.setItem("initial", contador) }, [contador]);

    return (
        <>
            <div className="contador">
                <div className="cantidad">
                    <button id="decrementar" className="botonesContador" onClick={decrementar}> - </button>
                    <p>{contador}</p>
                    <button id="incrementar" className="botonesContador" onClick={incrementar}>+</button>
                </div>
                {added ? <BotonCarrito /> : <BotonAgregarComprar />}
            </div>
        </>
    )
}

export default ItemCount;