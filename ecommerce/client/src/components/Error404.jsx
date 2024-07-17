import Content from "./complementos/Content";

const Error404 = () => {
    return (
        <section className="cartPage">
            <h1 className="titulos text-center">Error 404</h1>
            <h2 className="subt text-center">Lo sentimos</h2>
            <h1 className="titulos text-center">La página que estás buscando no existe</h1>
            <Content />
        </section>
    );
}

export default Error404;