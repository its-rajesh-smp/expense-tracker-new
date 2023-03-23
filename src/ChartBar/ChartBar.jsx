import React from 'react';
import "./ChartBar.css"

function CharBar(props) {
    return ( 
        <div style={props.style}  className="ChartBar-div">
            <p className='ChartBar-div-p'>{props.month}</p>
        </div>
     );
}

export default CharBar;