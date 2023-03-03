import { useState } from "react";
import Form from "./Form";
function Items(props) {
  return (
    <div className="itemsBox">
      <ul>
        <li>
          <p>Date</p>
          <p>{props.itemNameFunc}</p>
          <p>Amount</p>
          <button className="itemBtn">X</button>
        </li>
      </ul>
    </div>
  );
}

export default Items;
