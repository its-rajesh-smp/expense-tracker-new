import React from "react";
import"./SillyComponents.css"

function Date(props) {
  return (
    <div className="Date-div" >
      <p>{props.date}</p>
      <p>Sunday</p>
    </div>
  );
}



function Name(props){
    return (
        <div className="Name-div">
            <p>{props.name}</p>
        </div>
    )
}


function Price(props){
    return (
        <div className="Price-div">
            <p><span>{props.price}</span> $</p> 
        </div>
    )
}


function EditButton(props){
    return (
        <button className="EditButton-btn" >Edit</button>
    )
}

export { Date,Name,Price,EditButton };
