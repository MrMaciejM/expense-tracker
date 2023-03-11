import React from "react";
import { useState } from "react";

export default function Form(props) {
  
  const [userInputForm, setUserInputForm] = useState(null); 

  function handleInputChange(e) {
    setUserInputForm(e.target.value); 
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    props.onFormSubmit(userInputForm); 
  }
   
  return (
    <div>
    <form onSubmit={handleSubmit} >
      <label>Item</label>
      <input value={userInputForm} onChange={handleInputChange}  placeholder="E.g. Coffee" type={"text"} />
      <label>Amount</label>
      <input placeholder="2.99" type={"number"} />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
