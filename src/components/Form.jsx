import React from "react";
import { useState } from "react";

export default function Form(props) {
  
  const [userItem, setUserItem] = useState(null); 
  const [userAmount, setUserAmount] = useState(null); 
  const [userDate, setUserDate] = useState(null); 
  const [userDateFormatted, setUserDateFormatted] = useState(null); 

  // *** Implement local storage ***
  let array = [];
  let getStorage = JSON.parse(localStorage.getItem("items"));  //|| [];
  let checkStorage = JSON.parse(localStorage.getItem("items"));

  //check if localStorage exists 
    if(checkStorage == null) {
        localStorage.setItem("items", JSON.stringify([])); 
    }

    function pushToLocalStorage() {
      array = getStorage.slice(); // creates copy of getStorage 
      if(userItem) {
        for(let i = 0; i < array.length; i++) {
          array.push({"id": i, userItem, userAmount, userDate});
        }
      }
      console.log("Ran push to storage");
      localStorage.setItem("items", JSON.stringify(array)); 
  }
  
  ////////////////////

  function handleItemChange(e) {
    setUserItem(e.target.value); 
  }

  function handleAmountChange(e) {
    setUserAmount(e.target.value); 
  }
  function handleDateChange(e) {
    const newDate = new Date(e.target.value)
    const options = {day: "numeric", month: "short", year:"numeric"};
    const formattedDate = newDate.toLocaleDateString("en-UK", options);
    setUserDate(e.target.value); 
    setUserDateFormatted(formattedDate); 
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    props.onFormSubmit(userItem, userAmount, userDateFormatted); 
    pushToLocalStorage(); 
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

      <label>Date</label>
      <input type={"date"} value={userDate} onChange={handleDateChange} />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleClearAll}>Clear All</button>
    </form>
    </div>
  );
}
