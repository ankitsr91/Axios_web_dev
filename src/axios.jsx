import axios from "axios";

const APT = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default APT;
