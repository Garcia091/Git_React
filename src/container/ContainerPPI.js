import React from "react";
import Inicio from "../components/Inicio";
import Destino from "../components/Destinos";
import Registro from "../components/Registro";
import Login from "../components/Login";
//Navegación
import { BrowserRouter, Route } from "react-router-dom";

export default function ContainerPPI() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Inicio} />
      <Route path="/Destino" exact component={Destino} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Login" exact component={Login} />
    </BrowserRouter>
  );
}
