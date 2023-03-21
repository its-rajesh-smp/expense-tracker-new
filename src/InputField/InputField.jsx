import React, { useState } from "react";
import "./InputField.css";
import Card from "../Card/Card";

function InputField(props) {
  let [name, Fname] = useState();
  let [date, Fdate] = useState();
  let [price, Fprice] = useState();

  
  //!!! Getting Values But Whenever we type something in the input field due to onChage handlar it component is making re render again and again ❎❎❎
  // console.log(props.onButtonEdit);


  let newExpence = {
    name: name,
    date: date,
    price:price
  };


  // This Function Will Call when btn submit is clicked in inputfield
  function setDataFunction(){
    props.onButtonSubmit(newExpence)
    props.onCloseInput()
  }

  /**
   *  * Edit Fields Full Field 🆗🆗🆗🆗
   * 
   */

  
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
            defaultValue={props.onButtonEdit.name /**Setting Default Value Getting From App.js Edit Field " " */}

          />
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => Fdate(e.target.value)}
            defaultValue={props.onButtonEdit.date /**Setting Default Value Getting From App.js Edit Field " " */}
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => Fprice(e.target.value)}
            defaultValue={props.onButtonEdit.price /**Setting Default Value Getting From App.js Edit Field " " */}
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
