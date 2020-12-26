import React, { useState } from "react";
import "./MultiSelector.css";
import { GoCheck } from "react-icons/go";
import { IconContext } from "react-icons";

export default function MultiSelector(props) {
  console.log(props.setSelectedRestaurants);

  return (
    <div className="multi-selector">
      {props.data.map((el, index) =>
        BuildItem(
          index,
          props.selectedRestaurants,
          props.setSelectedRestaurants
        )
      )}
    </div>
  );
}

function BuildItem(index, selectedRestaurants, setSelectedRestaurants) {
  return (
    <div
      className="selection-item"
      key={index}
      onClick={
        selectedRestaurants.length === 4
          ? () => {
              if (selectedRestaurants.includes(index)) {
                setSelectedRestaurants(
                  selectedRestaurants.filter((i) => i !== index)
                );
              }
            }
          : () => {
              if (selectedRestaurants.includes(index)) {
                //   console.log(selectedRestaurants.filter(index => ));
                setSelectedRestaurants(
                  selectedRestaurants.filter((i) => i !== index)
                );
              } else {
                setSelectedRestaurants([...selectedRestaurants, index]);
              }
            }
      }
    >
      {selectedRestaurants.includes(index) && (
        <div className="checked-item">
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <GoCheck />
          </IconContext.Provider>
        </div>
      )}
      <div>{index} Yo MAMA</div>
    </div>
  );
}
