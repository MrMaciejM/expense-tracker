import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import DisplayItems from "./components/DisplayItems";

function App() {
  const [items, setItems] = useState([]);

  const handleFormSubmit = (item, amount, date) => {
    setItems([...items, { item, amount, date }]);
  };
  return (
    <div>
      <h1>
        <span>E</span>xpense <span>T</span>racker
      </h1>
      <div className="appContainer">
        <Form onFormSubmit={handleFormSubmit}></Form>
        <DisplayItems items={items} />
      </div>
    </div>
  );
}

export default App;
