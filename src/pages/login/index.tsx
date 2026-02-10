import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { api } from "../../api/getApi";
import { LoginSchema, type LoginDTO } from "../../validation/loginSchema";
import { Conatiner, Containers } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type FormData = z.infer<typeof LoginSchema>;

export const Login = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginDTO) => {
    try {
      const response = await api.post("/Login", {
        email: data.email,
        password: data.password,
      });

      login(response.data.token, response.data.user);

      navigate("/projetos");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Containers>
      <Header />
      <Conatiner>
        <h1>FALA <span>COMIGO.</span></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Seu E-mail:" />
          <input
            {...register("password")}
            type="password"
            placeholder="Sua senha:"
          />
          <button type="submit">Entrar</button>
        </form>
      </Conatiner>
    </Containers>
  );
};