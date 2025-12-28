import { Container, Dash, Email, Facebook, IconeRedes, Instagram, OutlineEmail, Youtube } from "./style"

export const Footer = () => {
    return (
        <Container>
            <Dash>
                <p></p>
            </Dash>
            <IconeRedes>
                <Email>
                    <OutlineEmail />
                    <p>mikensonthomas0@gmail.com</p>
                </Email>
                <div>
                    <Instagram />
                    <Facebook />
                    <Youtube />
                </div>
            </IconeRedes>
        </Container>
    )
}