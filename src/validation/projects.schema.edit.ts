import { z } from "zod";

export const projetoEditSchema = z.object({
    titulo: z.string().min(1, "Informe o título"),
    descricao: z.string().min(1, "Informe a descrição"),
    tecnologias: z.string().min(1, "Informe pelo menos uma tecnologia"),
    link_github: z.string().url("Link inválido").optional(),
    categoria: z.string().min(1, "Informe a categoria"),
    status: z.string().optional(),
    repositorio_privado: z.boolean().optional(),
    tags: z.string().optional(),

    imagem_capa: z
        .any()
        .optional(),

    imagens: z
        .custom<FileList>()
        .optional(),


    video_demo: z.any(),
    imagemTitulo: z.array(z.string()).optional(),
    imagemDescricao: z.array(z.string()).optional(),


});

export type ProjetoEditDTO = z.infer<typeof projetoEditSchema>;