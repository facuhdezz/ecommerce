import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { useState, useEffect } from "react";

const AsideBody = () => {

    const handleClick = () => {
        window.dispatchEvent(new Event('scrollToTop'));
    };

    return (
        <>
            <article className="bodyAside">
                <Link className="linkAside" to={"/category/graficas"} onClick={handleClick}>+ Gráficas</Link>
                <Link className="linkAside" to={"/category/gabinetes"} onClick={handleClick}>+ Gabinetes</Link>
                <Link className="linkAside" to={"/category/monitores"} onClick={handleClick}>+ Monitores</Link>
                <Link className="linkAside" to={"/category/laptops"} onClick={handleClick}>+ Laptops</Link>
                <CartWidget />
            </article>
        </>
    )
}

export default AsideBody