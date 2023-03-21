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


function DeleteButton(props){
    //Sending  List Id To The Parent App.js When Btn Clicked
    return (
        <button onClick={()=>{props.onDelete(props.listID)}} className="DeleteButton-btn" >Delete</button>
    )
}


function EditButton(props){
    return (
        <button onClick={()=>props.onEdit(props.listID)} className="EditButton-btn" >Edit</button>
    )
}




function AddHoverBtn(props){
    //Triggure The onTriggerInput in App.js
    return (
        <button onClick={props.onTriggerInput} className="AddHoverBtn-div"> + </button>
    )
}

export { Date,Name,Price,DeleteButton,EditButton,AddHoverBtn };
