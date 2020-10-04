import axios from "axios";

const apiService = axios.create({
  baseURL: "https://favqs.com/api",
  responseType: "json",
});

export const getRandomQuote = () => {
  return apiService.get("/qotd");
};
