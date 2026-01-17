import { Header } from "../../components/Header"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type z from "zod";
import { api } from "../../api/getApi";
import { LoginSchema, type LoginDTO } from "../../validation/loginSchema";
import { Conatiner } from "./style";

type FormData = z.infer<typeof LoginSchema>;

export const Login = () => {

    const { register, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(LoginSchema)
    });

    const onSubmit = async (data: LoginDTO) => {
            try {
                const formData = new FormData();
    
                formData.append("email", data.email);
                formData.append("password", data.password);
    
    
                const response = await api.post("/Login", formData, {
                    headers: { "Content-Type": "application/json" },
                });
    
                console.log("✅ Login feito com sucesso:", response.data);
                alert("Login feito com sucesso!");
            } catch (error) {
                console.error(error);
                alert("Erro ao fazer login!");
            }
        };

    return (
        <>
            <Header />
            <Conatiner>
                <h1>FALA <span>COMIGO.</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('email')} type="text" name="email" placeholder="Seu E-mail:" />
                    <input {...register('password')} type="password" name="password" placeholder="Sua senha:" />

                    <button type="submit">Entrar</button>
                </form>
            </Conatiner>
        </>
    )
}