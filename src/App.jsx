import HorizontalList from "./components/HorizontalList";
const Paciente = {
  Nombre: "Paciente 1",
  Cédula: "1111111111",
  FechaNacimiento: "1973-08-19",
  Edad: 50,
  Sexo: "Hombre",
  Procedente: "Zipaquira",
  Ocupación: "ING AGRICOLA",
  Formación: "ING AGRICOLA",
  EstadoCivil: "Unión libre",
  ViveCon: "Novia",
  Hijos: "No",
  NúmeroHijos: "-",
  CorreoElectrónico: "paciente1@correo.com",
  Teléfono: "+57 3286657075"

}

function App() {
const campos1 = [ 
  { label: 'Nombre', value: Paciente.Nombre },
  { label: 'Cédula', value: Paciente.Cédula },
  { label: 'Fecha de nacimiento', value: Paciente.FechaNacimiento },
  { label: 'Edad', value: Paciente.Edad },
  { label: 'Sexo', value: Paciente.Sexo },
];

const campos2 = [
  { label: 'Procedente', value: Paciente.Procedente },
  { label: 'Ocupación', value: Paciente.Ocupación },
  { label: 'Formación', value: Paciente.Formación },
  { label: 'Estado civil', value: Paciente.EstadoCivil },
  { label: 'Vive con', value: Paciente.ViveCon },
];

const campos3 = [
  { label: 'Hijos', value: Paciente.Hijos },
  { label: 'Número de hijos', value: Paciente.NúmeroHijos },
  { label: 'Correo electrónico', value: Paciente.CorreoElectrónico },
  { label: 'Teléfono', value: Paciente.Teléfono },
];
  return (
    <div>
      <main>
        <div>
          <div id="historial">d
            <h2>Historia medica del paciente</h2>x
            <button><span id="icon">IA</span> Generar plan</button>  
          </div>
          <HorizontalList fields={campos1} />
          <HorizontalList fields={campos2} />
          <HorizontalList fields={campos3} />
        </div>
      </main>
    </div>
  );
}

export default App;
