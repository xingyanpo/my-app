import axios from "axios";
import { TOKEN } from "@/config/settings";

const request = axios.create({
  timeout: 5000
})

request.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem(TOKEN);
  return config;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  const {authorization} = response.headers;
  authorization && localStorage.setItem(TOKEN, authorization);
  return response;
}, function (error) {
  if (error.response.status === 401) {
    localStorage.removeItem(TOKEN);
    location.href = '/admin/login';
  }
  return Promise.reject(error);
});

export default request;