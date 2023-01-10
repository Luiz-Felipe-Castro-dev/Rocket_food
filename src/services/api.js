import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketfood-api-5s3p.onrender.com"
})