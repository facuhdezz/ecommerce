import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { useState, useEffect } from "react";
import ColorMode from "./ColorMode";

const AsideBody = () => {
    const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setAnchoVentana(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(()=> {
        if (anchoVentana <= 600) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [anchoVentana]);

    const MenuDesplegable = () => {
        return (
            <>
                <h3 className="menuDesplegable" onClick={() => { setFlag(true) }}>Menu</h3>
                <Link className="linkAside" to={"/category/laptops"} onClick={handleClick}>+ Laptops</Link>
                <Link className="linkAside" to={"/category/graficas"} onClick={handleClick}>+ Gráficas</Link>
                <Link className="linkAside" to={"/category/procesadores"} onClick={handleClick}>+ Procesadores</Link>
                <Link className="linkAside" to={"/category/gabinetes"} onClick={handleClick}>+ Gabinetes</Link>
                <Link className="linkAside" to={"/category/monitores"} onClick={handleClick}>+ Monitores</Link>
                <CartWidget />
            </>
        );
    };

    const handleClick = () => {
        window.dispatchEvent(new Event('scrollToTop'));
    };

    return (
        <>
            <article className="bodyAside">
                <ColorMode />
                {flag ? <h3 className="menuDesplegable" onClick={() => { setFlag(false) }}>Menu</h3> : <MenuDesplegable />}
            </article>
        </>
    );
}

export default AsideBody;