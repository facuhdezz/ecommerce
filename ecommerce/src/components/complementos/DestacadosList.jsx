import { useEffect, useState } from "react";
import Item from "../Item";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Spinner from "../Spinner";

const DestacadosList = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const db = getFirestore();
    //     const destCollection = collection(db, "destacados");
    //     getDocs(destCollection).then(result => {
    //         setProductList(result.docs.map(item => ({id:item.id, ...item.data()})))
    //     })
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "items"), where("destacados", "==", true))

        getDocs(q).then(result => {
            setProductList(result.docs.map(item => ({id: item.id, ...item.data()})))
            setLoading(false)
        })
    }, [])

    //Añado los productos destacados a la base de datos en firebase
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "destacados");

    //     productosDestacados.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Los productos se subieron correctamente!");
    // }, [])

    return (
        <>
            <h1 className="titulos" id="destacados">Destacados</h1>
            <section className="productosDestacados">
                {loading ? <Spinner /> :
                <div className="d-inline-flex gap-3 itemList">
                    {productList.map(product => (
                        <Item clase={"card cardDest"} link={product.id} key={product.id} img={product.img} nombre={product.nombre} precio={product.precio} moneda={product.moneda} marca={product.marca} />
                    ))}
                </div>}
            </section>
        </>
    )
}

export default DestacadosList;