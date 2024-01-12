import CartWidget from "./CartWidget";

const AsideBody = () => {
    return (
        <>
            <section className="bodyAside">
                <a className="linkAside" href="#">+ Componentes</a>
                <a className="linkAside" href="#">+ Equipos</a>
                <a className="linkAside" href="#">+ Monitores</a>
                <a className="linkAside" href="#">+ Laptops</a>
                <a className="linkAside" href="#">+ Periféricos</a>
                <a className="linkAside" href="#">+ Consolas</a>
                <article>
                    <CartWidget></CartWidget>
                </article>
            </section>
        </>
    )
}

export default AsideBody;