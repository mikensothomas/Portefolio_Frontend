import { useLocation, useNavigate } from "react-router-dom";
import { Container, Content, Left, Gallery, Preview } from "./style";
import { useState } from "react";
import type { ProjetoImagem } from "../types/types";

export const VerProjeto = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const projeto = state?.projeto;

    const [selectedImage, setSelectedImage] = useState<ProjetoImagem | null>(null);

    if (!projeto) {
        return (
            <Container>
                <h1>Projeto não encontrado.</h1>
            </Container>
        );
    }

    return (
        <Container>
            <Content>
                <Left>
                    <div className="bottonAndTitle">
                        <button onClick={() => navigate(-1)}>Voltar</button>
                        <h1>{projeto.titulo}</h1>
                    </div>

                    <div>
                        <p>{projeto.descricao}</p>
                        <Preview>
                            <h2>{selectedImage?.titulo}</h2>
                            <p>{selectedImage?.descricao}</p>

                            {selectedImage && (
                                // <img
                                //     src={`${import.meta.env.VITE_API_URL}${selectedImage.arquivo}`}
                                //     alt={selectedImage.titulo}
                                // />
                                <img
                                    src={selectedImage.arquivo}
                                    alt={selectedImage.titulo}
                                />

                            )}
                        </Preview>
                    </div>

                    <div className="tags">
                        {Array.isArray(projeto.tags) &&
                            projeto.tags.map((tag: string, index: number) => (
                                <span key={index}>{tag}</span>
                            ))}
                    </div>

                    <Gallery>
                        {projeto.imagens?.map((img: ProjetoImagem, index: number) => (
                            // <img
                            //     key={index}
                            //     src={`${import.meta.env.VITE_API_URL}${img.arquivo}`}
                            //     alt={img.titulo}
                            //     onClick={() => setSelectedImage(img)}
                            // />
                            <img
                                key={index}
                                src={`${import.meta.env.VITE_API_URL}${img.arquivo}`}
                                alt={img.titulo}
                                onClick={() => setSelectedImage(img)}
                            />

                        ))}
                    </Gallery>
                </Left>
            </Content>
        </Container>
    );
};
