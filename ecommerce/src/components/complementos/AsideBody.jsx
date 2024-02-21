import { Link, Route, Routes } from "react-router-dom";
import CartWidget from "../CartWidget";
import ItemCount from "../ItemCount";
import { useState, useEffect } from "react";

const AsideBody = () => {
    let initial = localStorage.getItem("initial") || 1; {/* Guardo el valor inicial en el local storage (desde ItemCount) para que no se reinicie el contador al recargar la página */ }

    const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setAnchoVentana(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <article className="bodyAside">
                <Routes>
                    {anchoVentana > 600 && (<Route path={"/item/:id"} element={<ItemCount stock={10} initial={initial} />} />)}                    
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