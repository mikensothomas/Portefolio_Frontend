import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/getApi";
import { projetoSchema } from "../../validation/projects.schema";
import type { ProjetoSchema } from "../../validation/projects.schema";
import { Container, ContainerGeral, ContainerSecondOne, ContainerSecondTwo } from "./style";

export const Register = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [savedImages, setSavedImages] = useState<{ file: File; titulo: string; descricao: string }[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { register, handleSubmit, watch, setValue } = useForm<ProjetoSchema & { imagemTitulo?: string[], imagemDescricao?: string[] }>({
        resolver: zodResolver(projetoSchema),
    });

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles(Array.from(e.target.files));
        }
    };

    const handleSaveImage = (index: number) => {
        const file = selectedFiles[index];
        const titulo = watch(`imagemTitulo.${index}`) || file.name;
        const descricao = watch(`imagemDescricao.${index}`) || "";

        setSavedImages(prev => [...prev, { file, titulo, descricao }]);

        setSelectedFiles(prev => prev.filter((_, i) => i !== index));

        setValue(`imagemTitulo.${index}`, "");
        setValue(`imagemDescricao.${index}`, "");

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const onSubmit = async (data: ProjetoSchema & { imagemTitulo?: string[], imagemDescricao?: string[] }) => {
        try {
            const formData = new FormData();

            const tecnologiasArray = data.tecnologias?.split(",").map(t => t.trim()).filter(t => t) || [];
            const tagsArray = data.tags?.split(",").map(t => t.trim()).filter(t => t) || [];

            formData.append("titulo", data.titulo);
            formData.append("descricao", data.descricao);
            formData.append("link_github", data.link_github || "");
            formData.append("categoria", data.categoria);
            formData.append("status", data.status || "");
            formData.append("repositorio_privado", JSON.stringify(Boolean(data.repositorio_privado)));
            formData.append("video_demo", data.video_demo || "");
            formData.append("tecnologias", JSON.stringify(tecnologiasArray));
            formData.append("tags", JSON.stringify(tagsArray));

            if (data.imagem_capa && data.imagem_capa.length > 0) {
                formData.append("imagem_capa", data.imagem_capa[0]);
            }

            savedImages.forEach(img => formData.append("imagens", img.file));
            formData.append("imagens_meta", JSON.stringify(savedImages.map(img => ({
                titulo: img.titulo,
                descricao: img.descricao
            }))));


            const response = await api.post("/registerProjects", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("✅ Projeto registrado:", response.data);
            alert("Projeto registrado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao registrar o projeto!");
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Registrar Projeto</h1>
                <ContainerGeral>
                    <ContainerSecondOne>
                        <div className="form-group">
                            <label>Título do Projeto</label>
                            <input {...register("titulo")} placeholder="Digite o título do projeto" />
                        </div>

                        <div className="form-group">
                            <label>Descrição do Projeto</label>
                            <textarea {...register("descricao")} placeholder="Descreva o projeto..." />
                        </div>

                        <div className="form-group">
                            <label>Tecnologias</label>
                            <input {...register("tecnologias")} placeholder="Ex: Node.js, Express, PostgreSQL" />
                        </div>

                        <div className="form-group">
                            <label>Categoria</label>
                            <select {...register("categoria")}>
                                <option value="">Selecione</option>
                                <option value="FRONT_END">Frontend</option>
                                <option value="BACK_END">Backend</option>
                                <option value="FULL_STACK">Full Stack</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Link do GitHub</label>
                            <input {...register("link_github")} placeholder="https://github.com/usuario/repositorio" />
                        </div>
                        <button type="submit">Salvar Projeto</button>
                    </ContainerSecondOne>

                    <ContainerSecondTwo>
                        <div className="form-group">
                            <label>Imagem de Capa</label>
                            <input type="file" accept="image/*" {...register("imagem_capa")} />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select {...register("status")}>
                                <option value="">Selecione</option>
                                <option value="DESENVOLVENDO">Desenvolvendo</option>
                                <option value="CONCLUINDO">Concluindo</option>
                                <option value="CONCLUIDO">Concluído</option>
                            </select>
                        </div>

                        <div className="form-group checkbox">
                            <input type="checkbox" {...register("repositorio_privado")} />
                            <label>Repositório Privado</label>
                        </div>

                        <div className="form-group">
                            <label>Tags</label>
                            <input {...register("tags")} placeholder="Ex: educação, multilíngue, aprendizado" />
                        </div>

                        <div className="form-group">
                            <label>Vídeo Demo (YouTube ou arquivo)</label>
                            <input {...register("video_demo")} placeholder="https://youtube.com/embed/..." />
                        </div>

                        <div className="form-group">
                            <label>Galeria de Imagens</label>
                            <input type="file" multiple accept="image/*" onChange={onFileChange} ref={fileInputRef} />
                        </div>

                        {selectedFiles.map((_, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <input {...register(`imagemTitulo.${index}`)} placeholder="Título da imagem" />
                                    <input {...register(`imagemDescricao.${index}`)} placeholder="Descrição da imagem" />
                                </div>
                                <button
                                    className="save"
                                    type="button"
                                    onClick={() => handleSaveImage(index)}
                                >
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