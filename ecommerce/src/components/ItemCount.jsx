import { useEffect, useState } from "react";
import { BotonAgregarComprar, BotonCarrito } from "./complementos/ItemCountButtons";

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
        setItemStock(stock)
    }, [producto])

    useEffect(() => { localStorage.setItem("initial", contador) }, [contador]);

    return (
        <>
            <div className="contador">
                <div className="cantidad">
                    <button id="decrementar" className="botonesContador" onClick={decrementar}> - </button>
                    <p>{contador}</p>
                    <button id="incrementar" className="botonesContador" onClick={incrementar}>+</button>
                </div>
                {added ? <BotonCarrito /> : <BotonAgregarComprar addToCart={addToCart}/>}
            </div>
        </>
    )
}

export default ItemCount;