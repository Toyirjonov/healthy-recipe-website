import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://recipes-api-4xzm.onrender.com/",
});
