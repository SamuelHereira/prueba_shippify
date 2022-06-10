import axios from "axios";

export const apiUrl = "https://62a1645fcd2e8da9b0f05128.mockapi.io/";

export const mainApi = axios.create({
  baseURL: apiUrl,
});
