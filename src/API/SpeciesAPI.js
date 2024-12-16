import axios from "axios";
const BASE_URL = "https://swapi.tech/api/species/";

export function GetSpecies() {
  return axios.get(`${BASE_URL}`);
}

export function GetSpecieById(id) {
  return axios.get(`${BASE_URL}${id}`);
}
