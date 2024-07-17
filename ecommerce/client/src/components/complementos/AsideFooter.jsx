import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";

const AsideFooter = () => {
    return (
        <footer className="footerAside">
            <div className="d-inline-flex gap-4">
                <p>© 2024 NetShop Uy</p>
                <a href="https://github.com/facuhdezz/ecommerce" target="_blank">
                    <img src={github} alt="link a github" className="footerIcons dark-icons" />
                    <img src={githubLight} alt="link a github" className="footerIcons light-icons" />
                </a>
                <a href="https://www.linkedin.com/in/facu-hernandez" target="_blank">
                    <img src={linkedin} alt="link a LinkedIn" className="footerIcons dark-icons" />
                    <img src={linkedinLight} alt="link a LinkedIn" className="footerIcons light-icons" />
                </a>
            </div>
        </footer>
    );
}

export default AsideFooter;