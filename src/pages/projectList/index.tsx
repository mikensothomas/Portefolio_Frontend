import { useLocation, useNavigate } from "react-router-dom";
import { Container, Content, Left, Gallery, Preview, ButtonAndT, ButtonEdDl } from "./style";
import { useContext, useState } from "react";
import type { ProjetoImagem } from "../../types/types";
import { api } from "../../api/getApi";
import { AuthContext } from "../../contexts/AuthContext";

export const VerProjeto = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const projeto = state?.projeto;
  const [selectedImage, setSelectedImage] = useState<ProjetoImagem | null>(null);
  const { isAuthenticated } = useContext(AuthContext);

  if (!projeto) {
    return (
      <Container>
        <h1>Projeto não encontrado.</h1>
      </Container>
    );
  }

  const habdleDelete = async () => {

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    const confirmDelete = window.confirm(`Tem certeza que deseja deletar o projeto "${projeto.titulo}"?`);
    if (!confirmDelete) return;

    try {
      await api.delete(`/deleteProject/${projeto._id}`);
      navigate(-1);
    } catch (error) {
      console.error("Erro ao deletar o projeto:", error);
      alert("Erro ao deletar o projeto!");
    }
  }

  return (
    <Container>
      <Content>
        <Left>
          <div className="bottonAndTitle">
            <ButtonAndT>
              <button onClick={() => navigate(-1)}>Voltar</button>
            <h1>{projeto.titulo}</h1>
            </ButtonAndT>
            <ButtonEdDl>
              <button onClick={() => navigate(`/editeProjects/${projeto._id}`)}>Editar Projeto</button>
              <button className="delete" onClick={habdleDelete}>Deletar Projeto</button>
            </ButtonEdDl>
          </div>

          <p>{projeto.descricao}</p>

          <Preview>
            <h2>{selectedImage?.titulo}</h2>
            <p>{selectedImage?.descricao}</p>

            {selectedImage && (
              <img
                src={selectedImage.arquivo}
                alt={selectedImage.titulo}
              />
            )}
          </Preview>

          <div className="tags">
            {projeto.tags?.map((tag: string, index: number) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <Gallery>
            {projeto.imagens?.map((img: ProjetoImagem, index: number) => (
              <img
                key={index}
                src={img.arquivo}
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