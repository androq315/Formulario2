import AutoDesplegable from "./inputs/AutoDesplegable"
import { Opciones } from "../data";
import Input from "./inputs/Input";
import { useState } from "react";
import Observaciones from "./inputs/Observaciones";
// hollaaaa
const RiesgoAdicionales = () => {
  const [abierto, setAbierto] = useState(false);
  const [fecha, setFecha] = useState("");

  return (
    <div id="modulo"> 
      <div id="celdas">
        <p id="Tazul">Riesgos Adicionales</p>
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
            <AutoDesplegable items={Opciones[2]} titulo={"Embarazo"} />
            <Observaciones titulo={"Observaciones"} />
          </div>

      <div id="celdas">
  <div id="Desplegable">
    <label id="Tgris">Última Regla</label>
    <input
      type="date"
      value={fecha}
      onChange={(e) => setFecha(e.target.value)}
    />
  </div>

  <div id="Desplegable">
    <label id="Tgris">Enfermedades Ovarios, Útero o Ciclo</label>
    <input type="text" />
  </div>

  <div id="Desplegable">
    <label id="Tgris">Obse enf ovarios, útero o ciclo</label>
    <input type="text" />
  </div>
</div>

    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Epilepsia"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Cancer"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Pulmonar"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Tuberculosis"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Dolor Articular"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Pro plaquetas"}/>
        <Observaciones titulo={"Observaciones"}/>

    </div>
    <div id="celdas">
        <AutoDesplegable items={Opciones[2]} titulo={"Cons Medicamentos cronica"}/>
        <Input titulo={"Cuales cons medicamentos cronica"}/>
        <Input titulo={"Número cons medicamentos cronica"}/>

    </div>

    <div id="celdas">
    <AutoDesplegable items={Opciones[5]} titulo={"Audit-C P1"}/>
    <AutoDesplegable items={Opciones[6]} titulo={"Audit-C P2"}/>
    <AutoDesplegable items={Opciones[5]} titulo={"Audit-C P3"}/> 
    </div>
 
        </div>
      )}
    </div>
  );
};

export default RiesgoAdicionales;
