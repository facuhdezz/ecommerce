import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import { getFirestore, addDoc, collection, getDoc, query, where, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [mostrar, setMostrar] = useState("block");
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, "items", id);

        getDoc(product).then(result => {
            setProducto({id: result.id, ...result.data()})
        })
    }, [id])

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
                <img src={producto.img} className="imgProducto" />
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
                </div>
                    {anchoVentana <= 600 && (<ItemCount stock={10} initial={1} />)}
            </section>
            {producto.category && <ItemList idCat={producto.category} />}
        </>
    )
}

export default ItemDetailContainer;