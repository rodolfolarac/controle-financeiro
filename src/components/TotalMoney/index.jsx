import "./index.css";
const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="containerTotal">
      <div className="totalValue">
        Valor total:
        <span className="finalPrice">
          R${" "}
          {listTransactions.reduce((acc, act) => {
            console.log(act);
            return act.type === "Entrada"
              ? acc + act.value
              : acc + act.value * -1;
          }, 0)}
        </span>
      </div>
      <p>O Valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
