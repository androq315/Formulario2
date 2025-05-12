const AutocompleteInputMock = ({ items, titulo }) => {
  return (
    <div id="Desplegable">
      <h4 id="Tgris">{titulo}</h4>
      <select name="opciones" >
        <option  disabled selected></option>
        {items.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default AutocompleteInputMock;
