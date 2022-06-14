import { BsFillTrashFill } from "react-icons/bs";
import "./style.css";
const Card = ({
  description,
  type,
  value,
  index,
  listTransactions,
  setListTransactions,
}) => {
  const removeItem = (id, listTransactions, setListTransactions) => {
    const output = listTransactions.filter((item, index) => {
      return item !== listTransactions[id];
    });
    setListTransactions(output);
  };
  return (
    <li key={index} className={type === "Entrada" ? "Green" : "Red"}>
      <div className="infoCard">
        <h3>{description}</h3>
        <span>{type}</span>
      </div>

      <p>
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button className={index}>
        <BsFillTrashFill
          className="trash"
          onClick={() => {
            removeItem(index, listTransactions, setListTransactions);
          }}
        />
      </button>
    </li>
  );
};

export default Card;
