import { useEffect, useState } from "react";
import Item from "../Item";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const DestacadosList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const destCollection = collection(db, "destacados");
        getDocs(destCollection).then(result => {
            setProductList(result.docs.map(item => ({id:item.id, ...item.data()})))
        })
    }, []);

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
                <div className="d-inline-flex gap-3 itemList">
                    {productList.map(product => (
                        <Item clase={"card cardDest"} link={product.id} key={product.id} img={product.img} nombre={product.nombre} precio={product.precio} moneda={product.moneda} marca={product.marca} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default DestacadosList;