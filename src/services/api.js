import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocket-food-1.herokuapp.com/"
})