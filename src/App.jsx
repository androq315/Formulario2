import EstadoPaciente from "./components/EstadoPaciente";
import HorizontalList from "./components/HorizontalList";
import { Paciente } from "./data";
import Antecedentes from "./components/Antedecentes";
import RiesgoCardiovascular from "./components/RiesgoCardiovascular";
import RiesgoSaludMental from "./components/RiegosSaludMental";
import RiesgoAdicionales from "./components/RIegosAdicionales";

function App() {
  const datos = Paciente[0]
  return (
    <div>
      <main>
        <div>
          <div id="historial">
            <h1>Historia medica del paciente</h1>
            <button id="botonIA"><span id="icon">IA</span> Generar plan</button>  
          </div>
          <p id="Tazul">Datos generales</p>
          <HorizontalList Paciente={datos} />
        <div>
          <EstadoPaciente/>
          <Antecedentes/>
          <RiesgoCardiovascular/>
          <RiesgoSaludMental/>
          <RiesgoAdicionales/>

        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
