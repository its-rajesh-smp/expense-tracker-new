import React, { useState } from "react";
import ExpenseFilter from "../Filter/ExpenseFilter";
import "./InputField.css";

function InputField(props) {


  let [name,Fname]=useState()
  let [date,Fdate]=useState()
  let [price,Fprice]=useState()

  let newExpence={
    name:name,
    date:date,
    price,price
  }


  const onInputBtuuonHandler=()=>{
    // Sending newExpence On Button Click To App.js useState
    props.onBtnSubmitHandler(newExpence)
  }


  return (
    <div className="InputField-div" >

      <div className="InputField-div-div">
        <input type="text" placeholder="Name"  onChange={(e)=> Fname(e.target.value)} />
        <input type="date" placeholder="Date"   onChange={(e)=> Fdate(e.target.value)} />
        <input type="number" placeholder="Price"  onChange={(e)=> Fprice(e.target.value)} />
      </div>
      <ExpenseFilter/>
      <button onClick={onInputBtuuonHandler} className="InputField-btn">Submit</button>
    </div>
  );
}

export default InputField;
