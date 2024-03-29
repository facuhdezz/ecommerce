import light from "../../assets/icon-theme/light-2.png";
import dark from "../../assets/icon-theme/dark-2.png";

const ColorMode = () => {
    const lightmode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
    };

    const darkmode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
    };

    return (
        <>
            <button type="button" className="btn-color btn-lightmode dark-icons" onClick={lightmode}>
                <img src={light} alt="icono de sol, lightmode"/>
            </button>
            <button type="button" className="btn-color btn-darkmode light-icons" onClick={darkmode}>
                <img src={dark} alt="icono de luna, darkmode"/>
            </button>
        </>
    );
}

export default ColorMode;