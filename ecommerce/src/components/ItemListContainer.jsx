import ItemList from "./ItemList";

const ItemListContainer = () => {
    return (
        <>
            <section className="productos">
                <h1 className="titulos" id="destacados">Destacados</h1>
                <ItemList />
            </section>
        </>
    )
}

export default ItemListContainer;