import { useEffect, useState } from "react";
import productos from "./productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
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

    return (
        <>
            <section className="productDetail">
                <img src={producto.img} className="imgProducto" />
                <div className="description">
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.moneda}<span> {producto.precio}</span></h3>
                    <ul>
                        {producto.caracteristicas && producto.caracteristicas.map((caracteristica, index) => (
                            <li key={index}>{caracteristica}</li>
                        ))}
                    </ul>
                    <button className="btn btn-primary w-50">Comprar</button>
                    <button className="btn btn-secondary w-50">Agregar al carrito</button>
                </div>
            </section>
            {producto.category && <ItemList idCat={producto.category} />}
        </>
    )
}

export default ItemDetailContainer;