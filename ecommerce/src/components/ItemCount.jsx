import { useEffect, useState } from "react";

const ItemCount = ({stock, initial}) => {

    const [cantidad, setCantidad] = useState(initial);

    const incrementar = () => {
        let input = document.getElementById("inputCantidad");
        let max = input.getAttribute("max");
        if (cantidad < max) {
            setCantidad(cantidad + 1);
        } else {
            alert('No hay más cantidad disponible');
        }
    }

    const decrementar = () => {
        let input = document.getElementById("inputCantidad");
        let min = input.getAttribute("min");
        if (cantidad > min) {
            setCantidad(cantidad - 1);
        }
    }

    useEffect(() => {
        let input = document.getElementById("inputCantidad");
        input.setAttribute("value", cantidad);
        localStorage.setItem('initial', cantidad);
    }, [cantidad])

    return (
        <>
            <div className="contador">
                <h3>Producto</h3>
                <div>
                    <button id="decrementar" className="botonesContador" onClick={decrementar}> - </button>
                    <input id="inputCantidad" type="number" min={0} max={stock} value={cantidad} readOnly />
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