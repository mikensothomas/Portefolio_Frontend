import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Content, Left, Gallery, Preview, ButtonAndT, ButtonEdDl } from "./style";
import { useContext, useEffect, useState } from "react";
import type { ProjetoImagem } from "../../types/types";
import { api } from "../../api/getApi";
import { AuthContext } from "../../contexts/AuthContext";

export const VerProjeto = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const projeto = state?.projeto;
  const [selectedImage, setSelectedImage] = useState<ProjetoImagem | null>(null);
  const { isAuthenticated } = useContext(AuthContext);
  const [totalImage, setTotalImage] = useState<number>(0)
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function getTotalImages() {
      if (!id) return

      try {
        const response = await api.get<{ total: number }>(`/getCountSlide/${id}`)
        setTotalImage(response.data.total)
      } catch (error) {
        console.error("Erro ao buscar imagens", error)
      }
    }
    getTotalImages()
  }, [id]);

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
    }
  }

  return (
    <Container>
      <Content>
        <Left>
          <div className="bottonAndTitle">
            <ButtonAndT>
              <h1>{projeto.titulo}</h1>
            </ButtonAndT>
            <ButtonEdDl>
              <button onClick={() => navigate(-1)}>Voltar</button>
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

          <div className="tecnologias">
            {projeto.tecnologias?.map((tecnologias: string, index: number) => (
              <span key={index}>{tecnologias}</span>
            ))}
          </div>
          <p className="slides">{totalImage} Slides</p>
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