import CartWidget from "./CartWidget";

const AsideBody = () => {
    return (
        <>
            <article className="bodyAside">
                <a className="linkAside" href="#">+ Componentes</a>
                <a className="linkAside" href="#">+ Equipos</a>
                <a className="linkAside" href="#">+ Monitores</a>
                <a className="linkAside" href="#">+ Laptops</a>
                <a className="linkAside" href="#">+ Periféricos</a>
                <CartWidget></CartWidget>
            </article>
        </>
    )
}

export default AsideBody;