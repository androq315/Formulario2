
const HorizontalList = ({ fields }) => {
  return (
    <div id="bloque">
      {fields.map((field, index) => (
        <div
          key={index}
          className="flex-1 text-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="font-semibold text-gray-500">{field.label}</div>
          <h4 className="text-lg">{field.value}</h4>
        </div>
      ))}
    </div>
  );
};

export default HorizontalList;
