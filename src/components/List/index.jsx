import Card from "../Card";
import "./style.css";
const List = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="containerResume">
      <div className="filter">
        <h2>Resumo Financeiro</h2>
        <div className="filterButtons">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <ul className="listTransactions">
        {listTransactions.map(({ description, type, value }, index) => {
          return (
            <Card
              description={description}
              type={type}
              value={value}
              index={index}
              key={index}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
