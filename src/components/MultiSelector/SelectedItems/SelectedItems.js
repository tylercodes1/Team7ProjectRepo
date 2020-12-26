import React from "react";
import "./SelectedItems.css";

export default function SelectedItems(props) {
  return (
    <div className="selected-items">
      <p>Selected Restaurants</p>
      {props.selectedRestaurants.map((el, index) => (
        <div className="selected-item" key={index}>
          {el} aslkdjfsalkd jflkdsajflkdsa jjf
        </div>
      ))}
    </div>
  );
}
