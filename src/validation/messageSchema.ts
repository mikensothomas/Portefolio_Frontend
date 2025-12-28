import z from "zod";

export const MessageSchema = z.object({
    name: z.string().nonempty("Informe o nome"),
    email: z.string().nonempty("Informe a email"),
    telefone: z.string().nonempty("Informe o número de celular"),
    message: z.string().nonempty("Escrever a mensagem"),
});

export type MessageSchema = z.infer<typeof MessageSchema>;