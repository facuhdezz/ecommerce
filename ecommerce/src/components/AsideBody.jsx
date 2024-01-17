import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";

const AsideBody = () => {
    let initial = localStorage.getItem("initial") || 1; {/* Guardo el valor inicial en el local storage (desde ItemCount) para que no se reinicie el contador al recargar la página */}

    return (
        <>
            <article className="bodyAside">
                <ItemCount stock={10} initial={initial} />
                <a className="linkAside" href="#">+ Componentes</a>
                <a className="linkAside" href="#">+ Equipos</a>
                <a className="linkAside" href="#">+ Monitores</a>
                <a className="linkAside" href="#">+ Laptops</a>
                <a className="linkAside" href="#">+ Periféricos</a>
                <a className="linkAside" href="#">+ Consolas</a>
                <CartWidget />
            </article>
        </>
    )
}

export default AsideBody;