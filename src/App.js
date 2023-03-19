import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import DisplayItems from "./components/DisplayItems";

function App() {
  const [userInput, setUserInput] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [items, setItems] = useState([]);

  const handleFormSubmit = (item, amount) => {
    //setUserInput(item);
    //setUserAmount(amount);
    setItems([...items, { item, amount }]);
  };
  return (
    <div className="appContainer">
      <Form onFormSubmit={handleFormSubmit}></Form>
      <DisplayItems items={items} />
    </div>
  );
}

export default App;
