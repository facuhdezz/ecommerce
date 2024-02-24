import spinnerLogo from "../assets/spinner/spinner_logo.svg"
import spinnerLogoLight from "../assets/spinner/spinner_logo_light.svg"
import spinnerBase from "../assets/spinner/spinner_base2.svg"

const Spinner = () => {
    return (
        <div className="container d-flex justify-content-center">
        <div className="spinner">
            <img className="spinnerBase" src={spinnerBase} alt="spinner de carga"/>
            <img className="spinnerLogo dark-icons" src={spinnerLogo} alt="logo-netshop"/>            
            <img className="spinnerLogo light-icons" src={spinnerLogoLight} alt="logo-netshop"/>
        </div>
        </div>
    )
}

export default Spinner;