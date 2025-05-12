import AutoDesplegable from "./inputs/AutoDesplegable"
import { Opciones } from "../data";
import Input from "./inputs/Input";
import { useState } from "react";

const Antecedentes = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div id="modulo"> 
    <div id="celdas">
            <p id="Tazul">Antecedentes</p>
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
      <Input titulo={"Antecedentes padre"}/>
      <Input titulo={"Antecedentes hermanos"}/>
    </div>
      
      <div id="celdas">
      <Input titulo={"Antecedentes hijos"}/>
      <Input titulo={"Antecedentes otros"}/>
      <AutoDesplegable items={Opciones[2]} titulo="Cuidador"/>
    </div>
    </div>)}
    
    
     </div>
  );
};

export default Antecedentes;
