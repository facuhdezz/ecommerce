import { useEffect, useState } from "react";
import productosDestacados from "../productosDestacados";
import Item from "../Item";

const DestacadosList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosDestacados);
            }, 2000)
        });

        promesa.then(data => {
            setProductList(data)
        });
    }, []);

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