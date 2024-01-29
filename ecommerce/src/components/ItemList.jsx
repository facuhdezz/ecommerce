import { useEffect, useState } from "react";
import productos from "./productos";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = ({idCat}) => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            let productsToAppend = productos.filter(product => (product.category == id || product.category == idCat));
            setTimeout(() => {
                resolve(productsToAppend);
            }, 2000);
        });

        promesa.then(data => {
            setProductList(data)
        });
    }, [id]);

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