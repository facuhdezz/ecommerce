import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({producto}) => {
    const [mostrar, setMostrar] = useState("block");
    const {addProduct, cart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        addProduct(producto, cantidad);
    }

    const displayList = () => {
        setMostrar((prevMostrar) => (prevMostrar === "none" ? "block" : "none")); // Cuando se hace un hover a la imagen se ejecuta la función modificando el valor de mostrar
    }

    const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setAnchoVentana(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <section className="productDetail">
                <img src={producto.img} alt={producto.nombre} className="imgProducto" />
                <div className="description">
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.moneda}<span> {producto.precio}</span></h3>
                    <div className="caracteristicas">
                        <h4 onClick={displayList}>+ Características:</h4>
                        <ul style={{ display: mostrar }}>
                            {producto.caracteristicas && producto.caracteristicas.map((caracteristica, index) => (
                                <li key={index}>{caracteristica}</li>
                            ))}
                        </ul>
                    </div>
                    <ItemCount onAdd={onAdd} producto={producto} stock={Number(producto.stock)} initial={1}/>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;