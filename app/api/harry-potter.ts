import axios from "axios";

const baseUrl = "https://hp-api.onrender.com/api/characters";

// harry-potter api
export const getCharacters = () => {
  return axios.get(`${baseUrl}`).then((res) => res.data);
};
