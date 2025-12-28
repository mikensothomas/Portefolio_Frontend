import { ContainerAndDash, ContainerHeader, Dash, Menu } from "./style"
import Icone from "../../assets/IconeMT.png"
import { useLocation } from "react-router-dom";


export const Header = () => {
    const location = useLocation();

    return (
        <ContainerAndDash>
            <ContainerHeader>
                <img src={Icone} alt="Icone" />
                <Menu>
                    <ul>
                        <li><a href="/" className={location.pathname === "/" ? "active" : ""}>Início</a></li>
                        <li><a href="/especialidades" className={location.pathname === "/especialidades" ? "active" : ""}>Especialidades</a></li>
                        <li><a href="/sobre" className={location.pathname === "/sobre" ? "active" : ""}>Sobre</a></li>
                        <li><a href="/projetos" className={location.pathname === "/projetos" ? "active" : ""}>Projetos</a></li>
                    </ul>
                </Menu>
                <button onClick={() => window.location.href = "/contact"}>Contato</button>
            </ContainerHeader>
            <Dash>
                <p></p>
            </Dash>
        </ContainerAndDash>
    )
}