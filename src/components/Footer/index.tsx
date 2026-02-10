import { Container, Dash, Email, Facebook, IconeRedes, Instagram, OutlineEmail, Youtube } from "./style"

export const Footer = () => {
    return (
        <Container>
            <Dash>
                <p></p>
            </Dash>
            <IconeRedes>
                <Email
                    onClick={() =>
                        (window.location.href = "mailto:mikensonthomas0@gmail.com")
                    }
                >
                    <OutlineEmail />
                    <span>mikensonthomas0@gmail.com</span>
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