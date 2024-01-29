import { Link } from "react-router-dom";

const Item = (item) => {
    return (
        <div className={item.clase}>
            <Link to={"/item/"+ item.link}><img src={item.img} className="card-img-top" alt={item.nombre} /></Link> 
            <div className="card-body">
                <h1>{item.nombre}</h1>
                <p className="fw-bold mt-2">{item.moneda} {item.precio}</p>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item;