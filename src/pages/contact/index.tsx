import { Header } from "../../components/Header"
import { Conatiner } from "./style"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type z from "zod";
import { MessageSchema, type MessageDTO } from "../../validation/messageSchema";
import { api } from "../../api/getApi";
import { Footer } from "../../components/Footer";

type FormData = z.infer<typeof MessageSchema>;

export const Contact = () => {

    const { register, handleSubmit, reset } = useForm<FormData>({
        resolver: zodResolver(MessageSchema)
    });

    const onSubmit = async (data: MessageDTO) => {
            try {
                const formData = new FormData();
    
                formData.append("name", data.name);
                formData.append("email", data.email);
                formData.append("telefone", data.telefone);
                formData.append("message", data.message);
    
    
                await api.post("/registerMessage", formData, {
                    headers: { "Content-Type": "application/json" },
                });

                reset()

            } catch (error) {
                console.error(error);
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
            <Footer />
        </>
    )
}