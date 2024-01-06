import Logo from "../assets/netshop-text-light.svg"

const ItemListContainer = ({ greeting }) => {
    return (
        <section className="aviso">
            <div>
                <h1 className="title">Bienvenido a:</h1>
                <img src={Logo} alt="Logo de NetShop: letra N con flecha atravezada" className="logoLanding" />
                <h3 className="greeting">{greeting}</h3>
            </div>
        </section>
    )
}

export default ItemListContainer;