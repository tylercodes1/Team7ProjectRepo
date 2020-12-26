import React from "react";

export default function SelectedItems(props) {
  return (
    <div>
      <p>Selected Restaurants</p>
      {props.selectedRestaurants.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
}
