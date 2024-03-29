import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import DisplayItems from "./components/DisplayItems";

function App() {
  const [items, setItems] = useState([]);

  function refreshTotal() {
    let getStorage = JSON.parse(localStorage.getItem("items"));
    let total = 0;

    let totalPara = document.getElementById("expensesTotal");

    for (let i = 0; i < getStorage.length; i++) {
      let parsedAmount = parseFloat(getStorage[i].userAmount);
      total += parsedAmount;
    }

    totalPara.textContent = `Expenses Total: £${total.toFixed(2)}`;
  }

  const handleFormSubmit = (item, amount, date) => {
    setItems([...items, { item, amount, date }]);
  };

  // updates the Expenses Total on load/refresh
  setTimeout(() => {
    refreshTotal();
  }, 2000);

  return (
    <div>
      <h1>
        <span>E</span>xpenses <span>T</span>racker
      </h1>
      <div className="appContainer">
        <Form
          onFormSubmit={handleFormSubmit}
          refreshTotal={refreshTotal}
        ></Form>
        <DisplayItems items={items} refreshTotal={refreshTotal} />
      </div>
    </div>
  );
}

export default App;
