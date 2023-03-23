import React from "react";
import "./SillyComponents.css";


function DATE(props) {
 
  // Not Working Because This is not updating WE HAVE TO USE STATE HERE

  return (
    <div className="Date-div">
      <p>{props.date}</p>
      <p style={{fontSize:"20px"}} >{new Date(props.date).toDateString().split(" ")[1]}</p>
      <p style={{fontSize:"30px"}} >{new Date(props.date).toDateString().split(" ")[0]}</p>
    </div>
  );
}

function Name(props) {
  return (
    <div className="Name-div">
      <p>{props.name}</p>
    </div>
  );
}

function Price(props) {
  return (
    <div className="Price-div">
      <p>
        <span>{props.price}</span> $
      </p>
    </div>
  );
}
// ================================================
function DeleteButton(props) {
  //Sending  List Id To The Parent App.js When Btn Clicked
  return (
    <button
      onClick={() => {
        props.onDelete(props.listKey);
      }}
      className="DeleteButton-btn"
    >
      Delete
    </button>
  );
}

// ================================================
function EditButton(props) {
  return (
    <button
      onClick={() => {
        props.getEditableData(props.listKey);
        props.onEdit();
      }}
      className="EditButton-btn"
    >
      Edit
    </button>
  );
}
// ================================================

function AddHoverBtn(props) {
  //Triggure The onTriggerInput in App.js
  return (
    <button onClick={props.onHoverBtnClick} className="AddHoverBtn-div">
      +
    </button>
  );
}

export { DATE, Name, Price, DeleteButton, EditButton, AddHoverBtn };
