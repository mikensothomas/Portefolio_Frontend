import { ContainerAndDash, ContainerHeader, Dash, Menu } from "./style"
import Icone from "../../assets/IconeMT.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/projetos");
    }

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
                    </ul>
                </Menu>
                {
                    isAuthenticated && (
                        <ul className="logoutUl">
                            <li className="register">
                                <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>R. Projetos</Link>
                            </li>
                            <li className="messages">
                                <Link to="/MessagesList" className={location.pathname === "/messagesList" ? "active" : ""}>Messages</Link>
                            </li>
                            <li className="logout" onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    )
                }

                {
                    !isAuthenticated && (
                        <ul className="logoutUl">
                            <li className="login">
                                <Link to="/Login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
                            </li>
                        </ul>
                    )
                }
                <button onClick={() => navigate("/contact")}>Contato</button>
            </ContainerHeader>
            <Dash>
                <p></p>
            </Dash>
        </ContainerAndDash>
    )
}