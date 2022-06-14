import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Header from "./components/Header";
import GlobalStyle from "../src/styles/global";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 },
  ]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="container">
        <div className="containerLeft">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  );
}

export default App;
