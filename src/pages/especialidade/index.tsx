import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { BackFaServer, Container, ContainerEspacialidade, DevFaCloudUploadAlt, FrontFaLaptopCode, IntegreFaProjectDiagram } from "./style"

export const Especialidades = () => {
    return (
        <Container>
            <Header/>
            <h1><span>MINHAS</span> ESPECIALIDADES.</h1>
            <ContainerEspacialidade>
                <div>
                    <FrontFaLaptopCode />
                    <h3>Dev Front-end</h3>
                    <p>Criação de interfaces modernas, responsivas e interativas utilizando React, TypeScript, JavaScript, HTML e CSS, garantindo uma experiência fluida e intuitiva para o usuário.</p>
                </div>
                <div>
                    <BackFaServer />
                    <h3>Dev Back-end</h3>
                    <p>Implementação de servidores e APIs seguras com Node.js e Express, integração com bancos de dados como PostgreSQL e MongoDB, e foco em performance e escalabilidade.</p>
                </div>
                <div>
                    <IntegreFaProjectDiagram />
                    <h3>Integração e APIs</h3>
                    <p>Conexão entre diferentes sistemas e serviços web, criação e consumo de APIs RESTful, garantindo comunicação eficiente entre o front-end e o back-end.</p>
                </div>
                <div>
                    <DevFaCloudUploadAlt />
                    <h3>DevOps e Deploy</h3>
                    <p>Configuração e implantação de aplicações em serviços como Vercel, Render e Railway, com versionamento de código via Git e GitHub para controle e colaboração profissional.</p>
                </div>
            </ContainerEspacialidade>
            <Footer/>
        </Container>
    )
}