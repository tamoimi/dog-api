import axios from "axios";

const baseUrl = "https://hp-api.onrender.com/api";

// harry-potter character api
export const getCharacters = () => {
  return axios.get(`${baseUrl}/characters`).then((res) => res.data);
};

// harry-potter spell api
export const getSpells = () => {
  return axios.get(`${baseUrl}/spells`).then((res) => res.data);
};
