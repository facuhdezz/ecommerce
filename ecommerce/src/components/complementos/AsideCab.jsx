import LogoDark from "../../assets/netshop-text-light.svg";
import LogoLight from "../../assets/netshop-text-dark.svg";
import Search from "../../assets/search.svg";
import Home from "../../assets/home.svg";
import { Link } from "react-router-dom";

const AsideCab = () => {
    return (
        <header className="topAside">
            <img src={LogoDark} alt="Logo de NetShop: letra N con flecha atravezada" className="logo logo-dark" />
            <img src={LogoLight} alt="Logo de NetShop: letra N con flecha atravezada" className="logo logo-light" />
            <div className="d-flex flex-column gap-3">
                <a className="d-inline-flex align-items-center gap-3"><img src={Search} width={20}/><h5>Buscar</h5></a>
                <Link className="d-inline-flex align-items-center gap-3" to={"/"}><img src={Home} width={20}/><h5>Inicio</h5></Link>
            </div>
        </header>
    )
}

export default AsideCab;