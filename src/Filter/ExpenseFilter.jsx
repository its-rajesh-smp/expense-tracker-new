import React from "react";
import "./ExpenseFilter.css"


function ExpenseFilter(){
    return (
        <>
        <select className="ExpenseFilter-Select">
            <option defaultValue="Today">Today</option>
            <option defaultValue="Tomorrow">Tomorrow</option>
            <option defaultValue="Yesterday">Yesterday</option>
        </select>
        </>
    )
}



export default ExpenseFilter;