import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // useEffect(() => {
    //     const db = getFirestore();
    //     const product = doc(db, "items", id);

    //     getDoc(product).then(result => {
    //         setProducto({ id: result.id, ...result.data() });
    //         setLoading(false);
    //     })
    // }, [id]);

    useEffect(() => {
        fetch(`https://netshop-api.vercel.app/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducto(data[0]);
                setLoading(false);
            })
    }, [id]);

    return (
        <>
            {loading ? <Spinner /> : <ItemDetail producto={producto} />}
            {producto.category && <ItemList idCat={producto.category} />}
        </>
    );
}

export default ItemDetailContainer;