import { useState } from "react";
import productos from "./productos";
import Item from "./Item";

const ItemList = () => {
    const [productList, setProductList] = useState([]);

    console.log(productos)
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    });

    promesa.then(data => {
        setProductList(data)
    })

    return (
        <div className="d-inline-flex gap-3 itemList">
            {productList.map(product => (
                <Item key={product.id} img={product.img} nombre={product.nombre} precio={product.precio} moneda={product.moneda} marca={product.marca} />
            ))}
        </div>
    )
}

export default ItemList;