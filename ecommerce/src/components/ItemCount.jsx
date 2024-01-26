import { useEffect, useState } from "react";

const ItemCount = ({stock, initial}) => {

    const [cantidad, setCantidad] = useState(parseInt(initial));

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
            alert('No hay más cantidad disponible');
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    useEffect(() => {localStorage.setItem("initial", cantidad)}, [cantidad])

    return (
        <>
            <div className="contador">
                <h3>Producto</h3>
                <div className="cantidad">
                    <button id="decrementar" className="botonesContador" onClick={decrementar}> - </button>
                    {/* <input id="inputCantidad" type="number" min={1} max={stock} value={cantidad} readOnly /> */}
                    <p>{cantidad}</p>
                    <button id="incrementar" className="botonesContador" onClick={incrementar}>+</button>
                </div>
                <div>
                    <button id="agregarCarrito" className="agregarCarrito">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;