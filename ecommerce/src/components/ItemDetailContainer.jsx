import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, "items", id);

        getDoc(product).then(result => {
            setProducto({ id: result.id, ...result.data() })
        })
    }, [id])

    return (
        <>
            <ItemDetail producto={producto} />
            {producto.category && <ItemList idCat={producto.category} />}
        </>
    )
}

export default ItemDetailContainer;