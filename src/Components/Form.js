import { useState } from "react";
import "./Form.css";
import Items from "./Items";

function Form(props) {
  const [itemName, setItemName] = useState("");

  const itemNameFunc = (e) => {
    setItemName(itemName);
  };
  const itemAmount = (e) => {
    //
  };
  const itemDate = (e) => {
    //
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="formBox">
        <div className="formInputBox">
          <label>Item</label>
          <input
            onChange={itemNameFunc}
            placeholder="E.g. coffee"
            type={"text"}
          />
        </div>
        <div className="formInputBox">
          <label>Amount</label>
          <input onSubmit={itemAmount} placeholder="Amount" type={"number"} />
        </div>
        <div className="formInputBox">
          <label>Date</label>
          <input onSubmit={itemDate} type={"date"} />
        </div>
        <div className="formInputBox">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
