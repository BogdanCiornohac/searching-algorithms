import React from "react";
import './table.css'

const Square = (props) =>{
    return (
        <div className="square">{props.number}</div>
    );
}

export default Square;