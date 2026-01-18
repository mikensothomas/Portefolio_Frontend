import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/getApi";
import {
  Container,
  ContainerGeral,
  ContainerSecondOne,
  ContainerSecondTwo,
} from "./style";
import { useParams } from "react-router-dom";
import type { Imagem, Portfolio } from "../../types/types";
import {
  projetoEditSchema,
  type ProjetoEditDTO,
} from "../../validation/projects.schema.edit";

export const EditeProjects = () => {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<Portfolio | null>(null);
  const [existingImages, setExistingImages] = useState<Imagem[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [savedImages, setSavedImages] = useState<
    { file: File; titulo: string; descricao: string }[]
  >([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<
    ProjetoEditDTO & {
      imagemTitulo?: string[];
      imagemDescricao?: string[];
    }
  >({
    resolver: zodResolver(projetoEditSchema),
  });

  useEffect(() => {
    if (!id) return;

    async function loadProject() {
      try {
        const response = await api.get(`/projects/${id}`);
        setProject(response.data);
        setExistingImages(response.data.imagens || []);

        reset({
          titulo: response.data.titulo,
          descricao: response.data.descricao,
          tecnologias: response.data.tecnologias.join(", "),
          categoria: response.data.categoria,
          link_github: response.data.link_github ?? "",
          status: response.data.status,
          repositorio_privado: response.data.repositorio_privado,
          tags: response.data.tags.join(", "),
          video_demo: response.data.video_demo ?? "",
        });
      } catch (error) {
        console.error("Erro ao carregar projeto:", error);
      }
    }

    loadProject();
  }, [id, reset]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSaveImage = (index: number) => {
    const file = selectedFiles[index];
    const titulo = watch(`imagemTitulo.${index}`) || file.name;
    const descricao = watch(`imagemDescricao.${index}`) || "";

    setSavedImages((prev) => [...prev, { file, titulo, descricao }]);

    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));

    setValue(`imagemTitulo.${index}`, "");
    setValue(`imagemDescricao.${index}`, "");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (
    data: ProjetoEditDTO & {
      imagemTitulo?: string[];
      imagemDescricao?: string[];
    }
  ) => {
    try {
      const formData = new FormData();

      formData.append("titulo", data.titulo);
      formData.append("descricao", data.descricao);
      formData.append("categoria", data.categoria);
      formData.append("link_github", data.link_github || "");
      formData.append("status", data.status || "");
      formData.append(
        "repositorio_privado",
        JSON.stringify(Boolean(data.repositorio_privado))
      );
      formData.append("video_demo", data.video_demo || "");

      formData.append(
        "tecnologias",
        JSON.stringify(
          data.tecnologias.split(",").map((t) => t.trim())
        )
      );

      formData.append(
        "tags",
        JSON.stringify(data.tags?.split(",").map((t) => t.trim()) || [])
      );

      if (data.imagem_capa?.length) {
        formData.append("imagem_capa", data.imagem_capa[0]);
      }

      savedImages.forEach((img) => {
        formData.append("imagens", img.file);
      });

      if (savedImages.length > 0) {
        formData.append(
          "imagens_meta",
          JSON.stringify(
            savedImages.map((img) => ({
              titulo: img.titulo,
              descricao: img.descricao,
            }))
          )
        );
      }

      formData.append(
        "existing_images",
        JSON.stringify(
          existingImages.map((img) => ({
            id: img._id,
            titulo: img.titulo,
            descricao: img.descricao,
          }))
        )
      );

      await api.put(`/projects/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Projeto editado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao editar o projeto!");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar Projeto</h1>

        <ContainerGeral>
          <ContainerSecondOne>
            <input {...register("titulo")} placeholder="Título" />
            <textarea {...register("descricao")} placeholder="Descrição" />
            <input {...register("tecnologias")} placeholder="Tecnologias" />

            <select {...register("categoria")}>
              <option value="">Selecione</option>
              <option value="FRONT_END">Frontend</option>
              <option value="BACK_END">Backend</option>
              <option value="FULL_STACK">Full Stack</option>
            </select>

            <input {...register("link_github")} placeholder="GitHub" />
            <button type="submit">Salvar Projeto</button>
          </ContainerSecondOne>

          <ContainerSecondTwo>
            {project?.imagem_capa && (
              <div>
                <p>Imagem de capa atual</p>
                <img src={project.imagem_capa} width={200} />
              </div>
            )}

            <input type="file" {...register("imagem_capa")} />

            <h3>Imagens atuais</h3>
            {existingImages.map((img, index) => (
              <div key={img._id}>
                <img src={img.arquivo} width={150} />

                <input
                  value={img.titulo}
                  onChange={(e) => {
                    const copy = [...existingImages];
                    copy[index].titulo = e.target.value;
                    setExistingImages(copy);
                  }}
                />

                <input
                  value={img.descricao}
                  onChange={(e) => {
                    const copy = [...existingImages];
                    copy[index].descricao = e.target.value;
                    setExistingImages(copy);
                  }}
                />
              </div>
            ))}

            <input
              type="file"
              multiple
              onChange={onFileChange}
              ref={fileInputRef}
            />

            {selectedFiles.map((_, index) => (
              <div key={index}>
                <input {...register(`imagemTitulo.${index}`)} />
                <input {...register(`imagemDescricao.${index}`)} />
                <button type="button" onClick={() => handleSaveImage(index)}>
                  Salvar imagem
                </button>
              </div>
            ))}
          </ContainerSecondTwo>
        </ContainerGeral>
      </form>
    </Container>
  );
};