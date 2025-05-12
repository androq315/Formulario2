import AutoDesplegable from "./inputs/AutoDesplegable"
import { Opciones } from "../data";
import Input from "./inputs/Input";
import { useState } from "react";
import Observaciones from "./inputs/Observaciones";
// holaaaaaa
const RiesgoSaludMental = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div id="modulo"> 
    <div id="celdas">
            <p id="Tazul">Riesgo Salud Mental</p>
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
        <AutoDesplegable items={Opciones[2]} titulo={"Depresion"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
     <div id="celdas">
         <AutoDesplegable items={Opciones[2]} titulo={"WHOOLEY P1"}/>
         <AutoDesplegable items={Opciones[2]} titulo={"WHOOLEY P2"}/>
         <AutoDesplegable items={Opciones[2]} titulo={"Respuesta unica WHOOLEY"}/>
    </div>
    
    <div id="celdas">
    <AutoDesplegable items={Opciones[4]} titulo={"GAP-2 P1"}/>
    <AutoDesplegable items={Opciones[4]} titulo={"GAP-2 P2"}/>
    </div>

  
    </div>)}
     </div>
  );
};

export default RiesgoSaludMental;
