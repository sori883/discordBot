import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();


const apiClient = axios.create({
  baseURL: process.env.LAMBDA_INVOKE_PATH,
});

export default apiClient;