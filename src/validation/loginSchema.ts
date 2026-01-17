import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().nonempty("Informe o nome"),
    password: z.string().nonempty("Informe a senha"),
});

export type LoginDTO = z.infer<typeof LoginSchema>;