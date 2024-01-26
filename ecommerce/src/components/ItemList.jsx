import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productosDestacados from "./productosDestacados";
import productos from "./productos";
import Item from "./Item";

const ItemList = () => {
    const [productList, setProductList] = useState([]);
    const {id} = useParams();

useEffect(() => {
    const promesa = new Promise((resolve) => {
        let productsToAppend = id ? productos.filter(product => product.category == id) : productosDestacados;
        setTimeout(() => {
            resolve(productsToAppend);
        }, 2000)
    });

    promesa.then(data => {
        setProductList(data)
    })
}, [id])

    return (
        <div className="d-inline-flex gap-3 itemList">
            {productList.map(product => (
                <Item key={product.id} img={product.img} nombre={product.nombre} precio={product.precio} moneda={product.moneda} marca={product.marca} />
            ))}
        </div>
    )
}

export default ItemList;