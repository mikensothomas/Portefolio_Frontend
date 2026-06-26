import { ContainerAndDash, ContainerHeader, Dash, Menu } from "./style";
import Icone from "../../assets/IconeMT.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useState, useContext } from "react";

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/projetos");
        setMenuOpen(false);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <ContainerAndDash>
            <ContainerHeader>
                <img src={Icone} alt="Icone" />

                <Menu className={menuOpen ? "open" : ""}>
                    <ul>
                        <li>
                            <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link to="/especialidades" onClick={closeMenu} className={location.pathname === "/especialidades" ? "active" : ""}>
                                Especialidades
                            </Link>
                        </li>

                        <li>
                            <Link to="/sobre" onClick={closeMenu} className={location.pathname === "/sobre" ? "active" : ""}>
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link to="/projetos" onClick={closeMenu} className={location.pathname === "/projetos" ? "active" : ""}>
                                Projetos
                            </Link>
                        </li>

                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to="/register" onClick={closeMenu} className={location.pathname === "/register" ? "active" : ""}>
                                        R. Projetos
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/MessagesList" onClick={closeMenu} className={location.pathname === "/messagesList" ? "active" : ""}>
                                        Messages
                                    </Link>
                                </li>

                                <li className="logout">
                                    <span onClick={handleLogout}>Logout</span>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/login" onClick={closeMenu} className={location.pathname === "/login" ? "active" : ""}>
                                    Login
                                </Link>
                            </li>
                        )}

                        <li>
                            <Link to="/contact" onClick={closeMenu}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </Menu>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ContainerHeader>

            <Dash />
        </ContainerAndDash>
    );
};