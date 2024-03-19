import { Link } from "react-router-dom";

const Item = (item) => {

    const handleClick = () => {
        window.dispatchEvent(new Event('scrollToTop'));
    };

    return (
        <div className={item.clase} key={item.id}>
            <Link to={"/item/"+ item.link} onClick={handleClick}><div className="card-img-conteiner"><img src={item.img} className="card-img-top" alt={item.nombre} /></div></Link> 
            <div className="card-body">
                <h1>{item.nombre}</h1>
                <p className="fw-bold mt-2">{item.moneda} {item.precio}</p>
            </div>
            <Link to={"/item/"+ item.link}><button>Detalles</button></Link>
        </div>
    );
}

export default Item;