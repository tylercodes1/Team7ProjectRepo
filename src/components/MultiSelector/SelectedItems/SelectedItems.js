import React from "react";
import "./SelectedItems.css";

export default function SelectedItems(props) {
  console.log(props);
  return (
    <div className="selected-items">
      <p>{props.type !== undefined && `Selected ${props.type}`}</p>
      {props.selectedItems.map((el, index) => (
        <div className="selected-item" key={index}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
