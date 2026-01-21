import { Conainer, ContainerInformation, Imagem, InformationAndButton } from "./style"
import Image from "../../assets/Mikenson.png"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const Home = () => {
    return (
        <>
            <Conainer>
                <Header />
                <ContainerInformation>
                    <InformationAndButton>
                        <h1>💼 MIKENSON THOMAS — DESENVOLVEDOR FULL STACK & INOVADOR DIGITAL <span>.</span></h1>
                        <p>Sou formado em Ciência da Computação e apaixonado por criar soluções tecnológicas que fazem a diferença.
                            Atuo como desenvolvedor web, trabalhando com interfaces modernas e sistemas inteligentes.
                            Busco unir design, código e propósito, transformando ideias em experiências digitais acessíveis.
                            Meu foco é o crescimento contínuo, explorando novas linguagens e ferramentas para evoluir como profissional.</p>
                        <button onClick={() => window.location.href = "/contact"}>Entre em contato</button>
                    </InformationAndButton>
                    <Imagem>
                        <img src={Image} alt="Imagem Mikenson Thomas" />
                    </Imagem>
                </ContainerInformation>
            </Conainer>
            <Footer />
        </>
    )
}