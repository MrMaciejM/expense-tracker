import React from "react";
import { useState } from "react";

export default function Form(props) {
  
  const [userItem, setUserItem] = useState(null); 
  const [userAmount, setUserAmount] = useState(null); 

  function handleItemChange(e) {
    setUserItem(e.target.value); 
  }

  function handleAmountChange(e) {
    setUserAmount(e.target.value); 
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    props.onFormSubmit(userItem, userAmount); 
  }

  function handleClearAll() {
    localStorage.setItem("items", "[]"); 
  }
   
  return (
    <div>
    <form onSubmit={handleSubmit} >
      
      <label>Item</label>
      <input value={userItem} onChange={handleItemChange}  placeholder="E.g. Coffee" type={"text"} />

      <label>Amount</label>
      <input value={userAmount} onChange={handleAmountChange} placeholder="2.99" />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleClearAll}>Clear All</button>
    </form>
    </div>
  );
}
