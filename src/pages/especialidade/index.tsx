import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { BackFaServer, Container, ContainerEspacialidade, FrontFaLaptopCode } from "./style"

export const Especialidades = () => {
    return (
        <>
            <Header />
            <Container>
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
                </ContainerEspacialidade>
            </Container>
            <Footer />
        </>
    )
}