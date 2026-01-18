import axios, { AxiosHeaders } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }

  (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);

  return config;
});