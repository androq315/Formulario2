import AutoDesplegable from "./inputs/AutoDesplegable"
import { Opciones } from "../data";
import Input from "./inputs/Input";
import { useState } from "react";
import Observaciones from "./inputs/Observaciones";

const RiesgoCardiovascular = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div id="modulo"> 
    <div id="celdas">
            <p id="Tazul">Riesgo Cardiovascular</p>
            <button id="botonflecha"
        onClick={() => setAbierto(!abierto)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {abierto ? "▲" : "▼"}
      </button>
    </div>
          {abierto && (
            
    <div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Hipertencion"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Enfermedades de corazón"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>

    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Diabetes"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Problemas renales"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Sobre peso"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>

    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Actividad Fisica"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Fumador"}/>
        <Input titulo={"Años de fumador"}/>
        <Input titulo={"Numero de cigarrillo"}/>

    </div>
    </div>)}
     </div>
  );
};

export default RiesgoCardiovascular;
