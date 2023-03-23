import React, { useState } from "react";
import "./InputField.css";
import Card from "../Card/Card";

function InputField(props) {

  // Seting Defalut values
  let [name, Fname] = useState(props.dataForEdit.name);
  let [date, Fdate] = useState(props.dataForEdit.date);
  let [price, Fprice] = useState(props.dataForEdit.price);


  // Generating object of input data for sending in various parent components
  let newExpence = {
    name: name,
    date: date,
    price:price
  };


  // This Function Will Call when btn submit is clicked in inputfield
  function setDataFunction(){

    //if Edit Button pressed then we will get that work as ___EDIT___
    if(props.dataForEdit.work=="___EDIT___"){ 
      //Sending data to onButtonEdit child ➡️ Parent | edited data + key for localStorage update
      props.onButtonEdit({key:props.dataForEdit.listKey , ...newExpence})  
    }else{
      // Sending Data to onButtonSubmit child ➡️ Parent
      props.onButtonSubmit(newExpence)
    }

    //Closing The Input Field
    props.onCloseInput()  
  }

  
  return (
    <Card>
      <div className="InputField-div">
        <div className="InputField-div-Heading">
          <h1>Add Expense</h1>
          <button onClick={props.onCloseInput}>X</button>
        </div>
        <div className="InputField-div-div">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => Fname(e.target.value)}
            value={name}

          />
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => Fdate(e.target.value)}
           defaultValue={date}
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => Fprice(e.target.value)}
            value={price}
           
          />
        </div>
        
        <button onClick={setDataFunction} className="InputField-btn">
          Submit
        </button>
      </div>
    </Card>
  );
}

export default InputField;
