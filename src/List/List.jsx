import React from "react";
import { Date,Name,Price,EditButton } from "../SillyComponents/SillyComponents";
import "./List.css"

function List(props){
    return (
        <div className="List-div" >
            <Date date={props.date} />
            <Name name={props.name}/>
            <Price price={props.price} />
            <EditButton/>
        </div>
    )
}

export default List