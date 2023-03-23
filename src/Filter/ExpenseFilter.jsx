import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {


  return (
    <div>
      <select className="ExpenseFilter-Select" onChange={(e)=>{props.onYearFilter(e.target.value)}} >
        <option value="ALL">ALL</option>
        <option value="2023">2023</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
      </select>

      <input className="ExpenseFilter-Search" onChange={(e)=>{props.onSearchFilter(e.target.value)}} placeholder="Search"  />
    </div>
  );
}

export default ExpenseFilter;
