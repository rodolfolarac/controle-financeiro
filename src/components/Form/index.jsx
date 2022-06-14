import { useState } from "react";
import "./style.css";
const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");
  const selects = [
    {
      id: "Entrada",
      name: "Entrada",
    },
    {
      id: "Despesas",
      name: "Despesas",
    },
  ];

  const data = {
    description,
    value,
    type,
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="formContainer"
    >
      <label>Descrição</label>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        placeholder="Digite aqui sua descrição"
      ></input>
      <div className="formInfo">
        <div className="inputNumber">
          <label>Valor</label>
          <input
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            type="number"
          />
        </div>
        <div className="inputType">
          <label>Tipo de Valor</label>

          <select
            onChange={(event) => setType(event.target.value)}
            value={type}
            id="tip"
          >
            {selects.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={() => {
          (data.description.length > 0 && data.value.length > 0) ||
            setListTransactions([...listTransactions, data]);
          console.log(listTransactions);
          console.log(data.value.length);
          console.log(data);
        }}
        type="submit"
      >
        Inserir Valor
      </button>
    </form>
  );
};

export default Form;
