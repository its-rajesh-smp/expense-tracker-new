import React from "react";
import { Date,Name,Price,DeleteButton,EditButton } from "../SillyComponents/SillyComponents";
import "./List.css"

function List(props){


    return (
        <div className="List-div" >
            <Date date={props.date} />
            <Name name={props.name}/>
            <Price price={props.price} />
            <DeleteButton onDelete={props.onDelete} listKey={props.id} />
            <EditButton onEdit={props.onEdit} listKey={props.id} getEditableData={props.getEditableData} />
        </div>
    )
}

export default List