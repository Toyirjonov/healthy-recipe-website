import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://recipes-api-jhmf.onrender.com",
});
