import React from "react";
import { Date,Name,Price,DeleteButton,EditButton } from "../SillyComponents/SillyComponents";
import "./List.css"

function List(props){
    return (
        <div className="List-div" >
            <Date date={props.date} />
            <Name name={props.name}/>
            <Price price={props.price} />
            <DeleteButton onDelete={props.onDelete} listID={props.id /**List Id Passed */} />
            <EditButton onEdit={props.onEdit} listID={props.id} />
        </div>
    )
}

export default List