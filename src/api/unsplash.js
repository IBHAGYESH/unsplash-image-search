import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID D1E52zrb6-mf4QCO36SVJPcHhVQtIN6LDoPvYy8QSG8",
  },
});
