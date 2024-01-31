import light from "../../assets/icon-theme/light.png";
import dark from "../../assets/icon-theme/dark.png";

const ColorMode = () => {
    const lightmode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const darkmode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    return (
        <>
            <button type="button" className="btn-color btn-lightmode" onClick={lightmode}>
                <img src={light} />
            </button>
            <button type="button" className="btn-color btn-darkmode" onClick={darkmode}>
                <img src={dark} />
            </button>
        </>
    )
}

export default ColorMode;