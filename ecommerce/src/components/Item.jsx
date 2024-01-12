const Item = (item) => {
    return (
        <div className="card">
            <img src={item.img} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h1>{item.nombre}</h1>
                    <p className="fw-bold">{item.moneda} {item.precio}</p>
                    <p className="card-text">{item.marca}</p>
                </div>
        </div>
    )
}

export default Item;