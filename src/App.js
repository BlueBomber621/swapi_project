import "./App.css";

import NavBar from "./Components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import ViewCharacter from "./pages/ViewCharacter";

import Characters from "./pages/Characters";

import ViewPlanet from "./pages/ViewPlanet";

import Planets from "./pages/Planets";

import ViewStarship from "./pages/ViewStarship";

import Starships from "./pages/Starships";

import ViewVehicle from "./pages/ViewVehicle";

import Vehicles from "./pages/Vehicles";

import ViewSpecie from "./pages/ViewSpecie";

import Species from "./pages/Species";

import ViewFilm from "./pages/ViewFilm";

import Films from "./pages/Films";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Characters" element={<Characters />}></Route>
        <Route path="/ViewCharacter/:id" element={<ViewCharacter />}></Route>
        <Route path="/Planets" element={<Planets />}></Route>
        <Route path="/ViewPlanet/:id" element={<ViewPlanet />}></Route>
        <Route path="/Starships" element={<Starships />}></Route>
        <Route path="/ViewStarship/:id" element={<ViewStarship />}></Route>
        <Route path="/Vehicles" element={<Vehicles />}></Route>
        <Route path="/ViewVehicle/:id" element={<ViewVehicle />}></Route>
        <Route path="/Species" element={<Species />}></Route>
        <Route path="/ViewSpecie/:id" element={<ViewSpecie />}></Route>
        <Route path="/Films" element={<Films />}></Route>
        <Route path="/ViewFilm/:id" element={<ViewFilm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
