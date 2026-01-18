import { ContainerAndDash, ContainerHeader, Dash, Menu } from "./style"
import Icone from "../../assets/IconeMT.png"
import { Link, useLocation, useNavigate  } from "react-router-dom";


export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <ContainerAndDash>
            <ContainerHeader>
                <img src={Icone} alt="Icone" />
                <Menu>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Início</Link>
                        </li>
                        <li>
                            <Link to="/especialidades" className={location.pathname === "/especialidades" ? "active" : ""}>Especialidades</Link>
                        </li>
                        <li>
                            <Link to="/sobre" className={location.pathname === "/sobre" ? "active" : ""}>Sobre</Link>
                        </li>
                        <li>
                            <Link to="/projetos" className={location.pathname === "/projetos" ? "active" : ""}>Projetos</Link>
                        </li>
                        <li>
                            <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>R. Projetos</Link>
                        </li>
                    </ul>
                </Menu>
                <button onClick={() => navigate("/contact")}>Contato</button>
            </ContainerHeader>
            <Dash>
                <p></p>
            </Dash>
        </ContainerAndDash>
    )
}