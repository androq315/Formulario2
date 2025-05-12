import AutoDesplegable from "./inputs/AutoDesplegable"
import { Opciones } from "../data";
import Input from "./inputs/Input";
import { useState } from "react";

const EstadoPaciente = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div id="modulo"> 
    <div id="celdas">
            <p id="Tazul">Estado del paciente</p>
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
      <AutoDesplegable items={Opciones[0]} titulo="Tipo consulta" />
      <AutoDesplegable items={Opciones[1]} titulo="Nombre del diagnostico"/>
      <Input titulo={"Codigo del diagnostico"}/>
    </div>
      
      <div id="celdas">
      <AutoDesplegable items={Opciones[3]} titulo="Estado de salud" />
      <AutoDesplegable items={Opciones[4]} titulo="Problema o necesidad"/>
      <AutoDesplegable items={Opciones[4]} titulo="Emprender nuevas actividades"/>
    </div>
    
    <div id="celdas">
      <AutoDesplegable items={Opciones[4]} titulo="Satisfaccion afectiva" />
      <AutoDesplegable items={Opciones[4]} titulo="Tiempo en familia"/>
      <AutoDesplegable items={Opciones[4]} titulo="Participacion familiar"/>
    </div>
    <div id="celdas">
      <AutoDesplegable items={Opciones[4]} titulo="Eje 1" />
      <AutoDesplegable items={Opciones[4]} titulo="Eje 2 tipo familia"/>
      <AutoDesplegable items={Opciones[4]} titulo="Eje 2 eje familiar"/>
    </div>
    </div>)}
    
    
     </div>
  );
};

export default EstadoPaciente;
