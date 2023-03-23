import React from "react";
import { useState, useEffect } from "react";

export default function Form(props) {
  
  const [userItem, setUserItem] = useState(null); 
  const [userAmount, setUserAmount] = useState(null); 
  const [userDate, setUserDate] = useState(null); 
  const [userDateFormatted, setUserDateFormatted] = useState(null); 
  const [amountTotal, setAmountTotal] = useState(0); 

  // *** Implement local storage ***
  let array = [];
  let getStorage = JSON.parse(localStorage.getItem("items"));  //|| [];
  let checkStorage = JSON.parse(localStorage.getItem("items"));

  //check if localStorage exists, if not then sets it up
    if(checkStorage == null) {
        localStorage.setItem("items", JSON.stringify([])); 
    }

    function pushToLocalStorage() {
      array = getStorage.slice(); // creates copy of getStorage 
      if(userItem) {
        

        let i = 0;
        for(i; i < array.length; i++) {
          //loops through storage and creates unique IDs

        }
        array.push({"id": i, userItem, userAmount, userDateFormatted})
      }
      
      console.log("Ran push to storage");
      localStorage.setItem("items", JSON.stringify(array)); 
  }

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

  function expensesTotal() {
    let total = 0;
    for(let i = 0; i < getStorage.length; i++) {
      let parsedAmount = parseFloat(getStorage[i].userAmount);
      total += parsedAmount; 
    }
    setAmountTotal(total.toFixed(2));
    //setAmountTotal("Yoo");
    //return total.toFixed(2);    
  }

  // testing phase only - remove later 
  const refreshTotal = useEffect(() => {
    let total = 0;
    for(let i = 0; i < getStorage.length; i++) {
      let parsedAmount = parseFloat(getStorage[i].userAmount);
      total += parsedAmount; 
    }
    setAmountTotal(total.toFixed(2));
  }, [getStorage]);

   
  return (
    <div>
    <form onSubmit={handleSubmit} >

      <label>Item</label>
      <input value={userItem} onChange={handleItemChange}  placeholder="E.g. Coffee" type={"text"} required />

      <label>Amount</label>
      <input value={userAmount} onChange={handleAmountChange} type="number" step="any" placeholder="2.99" required />

      <label>Date</label>
      <input type={"date"} value={userDate} onChange={handleDateChange} required />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleClearAll}>Delete All</button>
    </form>

    <p id="expensesTotal" className="expensesTotal" onMouseUp={expensesTotal}>Expenses Total: £{amountTotal}</p>
    </div>
  );
}
