import { Header } from "../../components/Header"
import { Conatiner } from "./style"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type z from "zod";
import { MessageSchema } from "../../validation/messageSchema";
import { api } from "../../api/getApi";

type FormData = z.infer<typeof MessageSchema>;

export const Contact = () => {

    const { register, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(MessageSchema)
    });

    const onSubmit = async (data: MessageSchema) => {
            try {
                const formData = new FormData();
    
                formData.append("name", data.name);
                formData.append("email", data.email);
                formData.append("telefone", data.telefone);
                formData.append("message", data.message);
    
    
                const response = await api.post("/registerMessage", formData, {
                    headers: { "Content-Type": "application/json" },
                });
    
                console.log("✅ Mensagem registrada:", response.data);
                alert("Mensagem registrada com sucesso!");
            } catch (error) {
                console.error(error);
                alert("Erro ao registrar a mensagem!");
            }
        };

    return (
        <>
            <Header />
            <Conatiner>
                <h1>FALA <span>COMIGO.</span></h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name')} type="text" name="name" placeholder="Seu nome completo:" />
                    <input {...register('email')} type="text" name="email" placeholder="Seu E-mail:" />
                    <input {...register('telefone')} type="text" name="telefone" placeholder="Seu celular:" />
                    <textarea {...register('message')} name="message" placeholder="Sua mensagem:"></textarea>
                    <button type="submit">ENVIAR</button>
                </form>
            </Conatiner>
        </>
    )
}