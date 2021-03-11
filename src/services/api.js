import axios from "axios";
import { getToken } from "./auth";

const server = "https://reqres.in/";

const api = axios.create({
  baseURL: server,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.post["Access-Control-Allow-Origin"] = "*";
  }
  return config;
});

export default api;
