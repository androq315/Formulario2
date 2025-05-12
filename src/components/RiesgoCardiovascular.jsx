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
        <Input titulo={"Antecedentes madre"}/>
        <Observaciones titulo={"Observaciones"}/>
    </div>
    </div>)}
     </div>
  );
};

export default RiesgoCardiovascular;
