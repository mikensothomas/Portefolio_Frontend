export type StatusProjeto =
    | "DESENVOLVENDO"
    | "CONCLUINDO"
    | "CONCLUIDO";


export type CategoryProjects =
    | "FULL_STACK"
    | "BACK_END"
    | "FRONT_END";

export interface Imagem {
    titulo: string;
    descricao: string;
    arquivo: string;
}

export interface Portfolio {
    id: string;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    link_github?: string;
    categoria: CategoryProjects;
    imagem_capa?: string;
    status: StatusProjeto;
    repositorio_privado: boolean;
    tags: string[];
    video_demo?: string;
    imagens: Imagem[];
    createdAt: string;
    updatedAt: string;
}

export interface ProjetoImagem {
    id: number;
    titulo: string;
    arquivo: string;
    descricao: string;
}

export interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    imagem_capa: string;
    tags?: string[];
    imagens?: ProjetoImagem[];
}
