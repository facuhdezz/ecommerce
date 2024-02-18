import { Link, Route, Routes } from "react-router-dom";
import CartWidget from "../CartWidget";
import ItemCount from "../ItemCount";

const AsideBody = () => {
    let initial = localStorage.getItem("initial") || 1; {/* Guardo el valor inicial en el local storage (desde ItemCount) para que no se reinicie el contador al recargar la página */}

    return (
        <>
            <article className="bodyAside">
                <Routes>
                    <Route path={"/item/:id"} element={<ItemCount stock={10} initial={initial} />} />
                </Routes>                
                <Link className="linkAside" to={"/category/graficas"}>+ Gráficas</Link>
                <Link className="linkAside" to={"/category/gabinetes"}>+ Gabinetes</Link>
                <Link className="linkAside" to={"/category/monitores"}>+ Monitores</Link> 
                <Link className="linkAside" to={"/category/laptops"}>+ Laptops</Link>
                <CartWidget />
            </article>
        </>
    )
}

export default AsideBody