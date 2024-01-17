import Logo from "../assets/netshop-text-light.svg";
import Search from "../assets/search.svg";
import Home from "../assets/home.svg";

const AsideCab = () => {
    return (
        <header className="topAside">
            <img src={Logo} alt="Logo de NetShop: letra N con flecha atravezada" className="logo" />
            <div className="d-flex flex-column gap-3">
                <a className="d-inline-flex align-items-center gap-3"><img src={Search} width={20}/><h5>Buscar</h5></a>
                <a className="d-inline-flex align-items-center gap-3" href="#destacados"><img src={Home} width={20}/><h5>Inicio</h5></a>
            </div>
        </header>
    )
}

export default AsideCab;