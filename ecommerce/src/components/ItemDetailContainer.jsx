import { useEffect, useState } from "react";
import productos from "./productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [mostrar, setMostrar] = useState("block");
    const { id } = useParams();

    useEffect(() => {

        const promesa = new Promise((resolve) => {
            let productsToAppend = productos.find(product => product.id == id);
            setTimeout(() => {
                resolve(productsToAppend);
            }, 2000)
        });

        promesa.then(data => {
            setProducto(data);
        });

    }, [id]);

    const displayList = () => {
        setMostrar((prevMostrar) => (prevMostrar === "none" ? "block" : "none")); // Cuando se hace un hover a la imagen se ejecuta la función modificando el valor de mostrar
    }

    return (
        <>
            <section className="productDetail">
                <img src={producto.img} className="imgProducto" />
                <div className="description">
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.moneda}<span> {producto.precio}</span></h3>
                    {/* <div className="d-inline-flex gap-4">
                        <button className="btn btn-primary">Comprar</button>
                        <button className="btn btn-secondary">Agregar al carrito</button>
                    </div> */}
                    <div className="caracteristicas">
                        <h4 onClick={displayList}>+ Características:</h4>
                        <ul style={{ display: mostrar }}>
                            {producto.caracteristicas && producto.caracteristicas.map((caracteristica, index) => (
                                <li key={index}>{caracteristica}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {producto.category && <ItemList idCat={producto.category} />}
        </>
    )
}

export default ItemDetailContainer;