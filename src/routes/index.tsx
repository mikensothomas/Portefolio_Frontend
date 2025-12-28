import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/ProjectsRegister"
import { Especialidades } from "../pages/especialidade"
import { Sobre } from "../pages/sobre"
import { Projetos } from "../pages/projetos"
import { Contact } from "../pages/contact"
import { VerProjeto } from "../projectList"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/verProjeto" element={<VerProjeto />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="*" element={<h1>Rota não encontrada</h1>} />
        </Routes>
    )
}