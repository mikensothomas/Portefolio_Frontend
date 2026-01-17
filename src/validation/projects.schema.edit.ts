// import { z } from "zod";
// const MAX_FILE_SIZE = 1024 * 1024 * 5;

// const ACCEPTED_IMAGE_MIME_TYPES = [
//     "image/jpeg",
//     "image/jpg",
//     "image/png",
//     "image/webp",
// ];

// export const projetoEditSchema = z.object({
//     titulo: z.string().min(1, "Informe o título"),
//     descricao: z.string().min(1, "Informe a descrição"),
//     tecnologias: z.string().min(1, "Informe pelo menos uma tecnologia"),
//     link_github: z.string().url("Link inválido").optional(),
//     categoria: z.string().min(1, "Informe a categoria"),
//     status: z.string().optional(),
//     repositorio_privado: z.boolean().optional(),
//     tags: z.string().optional(),

//     imagem_capa: z
//         .any()
//         .optional()
//         .refine(
//             (files) => !files || files?.[0]?.size <= MAX_FILE_SIZE,
//             "Max image size is 5MB."
//         )
//         .refine(
//             (files) =>
//                 !files || ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
//             "Only .jpg, .jpeg, .png and .webp formats are supported."
//         ),

//     imagens: z
//         .custom<FileList>()
//         .optional()
//         .refine(
//             (files) => !files || files.length > 0,
//             "Envie pelo menos uma imagem"
//         ),


//     video_demo: z.any(),
//     imagemTitulo: z.array(z.string()).optional(),
//     imagemDescricao: z.array(z.string()).optional(),


// });

// export type ProjetoEditDTO = z.infer<typeof projetoEditSchema>;