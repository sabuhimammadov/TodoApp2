import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://www.omdbapi.com/",
  //   timeout: 1000,
  params: {
    apikey: "a407a7b3",
  },
});
