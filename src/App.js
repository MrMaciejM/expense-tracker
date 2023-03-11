import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import DisplayItems from "./components/DisplayItems";

function App() {
  const [userInput, setUserInput] = useState();

  const handleFormSubmit = (input) => {
    setUserInput(input);
  };
  return (
    <div className="appContainer">
      <Form onFormSubmit={handleFormSubmit}></Form>
      <DisplayItems userInput={userInput}></DisplayItems>
    </div>
  );
}

export default App;
