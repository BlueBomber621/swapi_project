import axios from "axios";
const BASE_URL = "https://swapi.tech/api/vehicles/";

export function GetVehicles() {
  return axios.get(`${BASE_URL}`);
}

export function GetVehicleById(id) {
  return axios.get(`${BASE_URL}${id}`);
}
