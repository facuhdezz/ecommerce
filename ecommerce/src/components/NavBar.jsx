import Logo from "../assets/netshop.svg"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center">
                        <img src={Logo} alt="Logo de NetShop: letra N con flecha atravezada" className="logo" />
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Componentes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Equipos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Monitores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Periféricos</a>
                            </li>
                            <li className="nav-item">
                                <CartWidget></CartWidget>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;