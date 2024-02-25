import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ img, description, id, link }) => {
    const [mostrar, setMostrar] = useState("none");

    const hoverImg = () => {
        setMostrar((prevMostrar) => (prevMostrar === "none" ? "block" : "none")); // Cuando se hace un hover a la imagen se ejecuta la función modificando el valor de mostrar
    }

    const handleClick = () => {
        window.dispatchEvent(new Event('scrollToTop'));
    };

    return (
        <div id={id} onMouseEnter={hoverImg} onMouseLeave={hoverImg}> {/* Utilizo onMouseEnter y onMouseOver para ejecutar la funcion hoverImg al pasar el mouse por encima del div */}
            <Link to={"/category/" + link} onClick={handleClick}><img src={img} alt={description} style={{width: '100%', height: '100%'}}/></Link>
            <div className="tituloCat">
                <h1 id={"titulo"+id} style={{display: mostrar}}>{description}</h1>
            </div>
        </div>
    );
}

export default Card;