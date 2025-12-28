import { Header } from "../../components/Header"
import { ImageAndText, TitleAndParagraph } from "./style"
import ImageMikensonThomas from "../../assets/MikensonImage.png"
import { Footer } from "../../components/Footer"

export const Sobre = () => {
    return (
        <>
            <Header />
            <ImageAndText>
                <img src={ImageMikensonThomas} alt="Mikenson thomas" />
                <TitleAndParagraph>
                    <h1><span>MUITO PRAZER,</span> EU SOU MIKENSON THOMAS.</h1>
                    <p>Sou Mikenson Thomas, formado em Ciência da Computação no IFC. Durante minha formação, tive a oportunidade de estagiar na empresa BRF, atuando no setor de Tecnologia da Informação, onde adquiri experiência prática em suporte técnico e em soluções voltadas à infraestrutura e desenvolvimento de sistemas. Essa vivência reforçou meu interesse em seguir carreira na área de tecnologia, especialmente no desenvolvimento de software.</p>
                    <p>Como freelancer, já participei de diversos projetos que envolvem criação de sites e plataformas web utilizando Node.js, Express, JavaScript, HTML e CSS, além de trabalhar com PostgreSQL para gerenciamento de banco de dados. Desenvolvi, por exemplo, uma plataforma multilíngue para ajudar estrangeiros haitianos a aprender português, com foco em responsividade e acessibilidade. Busco sempre aprimorar meus conhecimentos e contribuir com soluções inovadoras e funcionais.</p>
                </TitleAndParagraph>
            </ImageAndText>
            <Footer/>
        </>
    )
}