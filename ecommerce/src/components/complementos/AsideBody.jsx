import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import ItemCount from "../ItemCount";

const AsideBody = () => {
    let initial = localStorage.getItem("initial") || 1; {/* Guardo el valor inicial en el local storage (desde ItemCount) para que no se reinicie el contador al recargar la página */}

    return (
        <>
            <article className="bodyAside">
                <ItemCount stock={10} initial={initial} />
                <Link className="linkAside" to={"/"}>+ Componentes</Link> 
                <Link className="linkAside" to={"/"}>+ Equipos</Link> 
                <Link className="linkAside" to={"/category/monitores"}>+ Monitores</Link> 
                <Link className="linkAside" to={"/category/laptops"}>+ Laptops</Link> 
                <Link className="linkAside" to={"/"}>+ Periféricos</Link> 
                <Link className="linkAside" to={"/"}>+ Consolas</Link> 
                <CartWidget />
            </article>
        </>
    )
}

export default AsideBody;