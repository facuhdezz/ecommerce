import LogoDark from "../../assets/netshop-text-light.svg";
import LogoLight from "../../assets/netshop-text-dark.svg";
import Search from "../../assets/search.svg";
import SearchLight from "../../assets/search-light.svg";
import Home from "../../assets/home.svg";
import HomeLight from "../../assets/home-light.svg";
import { Link } from "react-router-dom";

const AsideCab = () => {

    const handleClick = () => {
        window.dispatchEvent(new Event('scrollToTop'));
    };

    return (
        <header className="topAside">
            <img src={LogoDark} alt="Logo de NetShop: letra N con flecha atravezada" className="logo logo-dark dark-icons" />
            <img src={LogoLight} alt="Logo de NetShop: letra N con flecha atravezada" className="logo logo-light light-icons" />
            <div className="d-inline-flex justify-content-between">
                <div className="d-flex flex-column gap-3">
                    <a className="d-inline-flex align-items-center gap-3"><img src={Search} width={20} className="dark-icons" alt="buscar"/><img src={SearchLight} width={20} className="light-icons" alt="buscar"/><h5>Buscar</h5></a>
                    <Link className="d-inline-flex align-items-center gap-3" to={"/"} onClick={handleClick}>
                        <img src={Home} width={20} className="dark-icons" alt="inicio"/>
                        <img src={HomeLight} width={20} className="light-icons" alt="inicio"/>
                        <h5>Inicio</h5>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default AsideCab;