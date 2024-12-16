import axios from "axios";
const BASE_URL = "https://swapi.tech/api/films/";

export function GetFilms() {
  return axios.get(`${BASE_URL}`);
}

export function GetFilmById(id) {
  return axios.get(`${BASE_URL}${id}`);
}
