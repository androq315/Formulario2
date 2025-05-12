
const HorizontalList = ({ Paciente }) => {
  return (
    <div id="lista">
        <div id="columna">
            <div id="bloque">Nombre<h4>{Paciente.Nombre}</h4></div>
            <div id="bloque">Procedente<h4>{Paciente.Procedente}</h4></div>
            <div id="bloque">Hijos<h4>{Paciente.Hijos}</h4></div>
        </div>
        <div id="columna">
            <div id="bloque">Cedula<h4>{Paciente.Cedula}</h4></div>
            <div id="bloque">Ocupacion<h4>{Paciente.Ocupacion}</h4></div>
            <div id="bloque">Numero de hijos<h4>{Paciente.NumeroHijos}</h4></div>
        </div>
        <div id="columna">
            <div id="bloque">Fecha de nacimiento<h4>{Paciente.FechaNacimiento}</h4></div>
            <div id="bloque">Formacion<h4>{Paciente.Formacion}</h4></div>
            <div id="bloque">Correo electronico<h4>{Paciente.CorreoElectronico}</h4></div>
        </div>
           <div id="columna">
            <div id="bloque">Edad<h4>{Paciente.Edad}</h4></div>
            <div id="bloque">Estado Civil<h4>{Paciente.EstadoCivil}</h4></div>
            <div id="bloque">Telefono<h4>{Paciente.Telefono}</h4></div>
        </div>
           <div id="columna">
            <div id="bloque">Sexo<h4>{Paciente.Sexo}</h4></div>
            <div id="bloque">Vive con<h4>{Paciente.ViveCon}</h4></div>
        </div>
    </div>
  );
};

export default HorizontalList;
