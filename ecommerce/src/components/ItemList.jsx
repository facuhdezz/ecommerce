import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { getFirestore, addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemList = ({idCat}) => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();
    console.log(idCat)

    //Añado los productos destacados a la base de datos en firebase
    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     productos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Los productos se subieron correctamente!");
    // }, [])

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "items"), where("category", "==", `${idCat || id}`))

        getDocs(q).then(result => {
            setProductList(result.docs.map(item => ({id: item.id, ...item.data()})))
        })
    }, [id])

    return (
        <>
            <h1 className="titulos" id="products">{productList[0] && productList[0].category}</h1>
            <section className="productosCat">
                <div className="itemList producto">
                    {productList.map(product => (
                        <Item clase={"card cardProducts"} link={product.id} key={product.id} img={product.img} nombre={product.nombre} precio={product.precio} moneda={product.moneda} marca={product.marca} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ItemList;