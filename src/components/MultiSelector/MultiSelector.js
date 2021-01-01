import React, { useState } from "react";
import "./MultiSelector.css";
import { GoCheck } from "react-icons/go";
import { IconContext } from "react-icons";

export default function MultiSelector(props) {
  console.log(props.selectedItems);
  console.log(props.items);

  return (
    <div className="multi-selector">
      {props.items !== undefined &&
        props.items.map((el, index) =>
          BuildItem(
            props.type,
            index,
            el,
            props.selectedItems,
            props.setSelectedItems
          )
        )}
    </div>
  );
}

function BuildItem(type, index, item, selectedItems, setSelectedItems) {
  return (
    // div is big because it has lots of conditional onclick-functionality
    <div
      className="selection-item"
      key={index}
      onClick={
        selectedItems.length === 4
          ? () => {
              // if 4 choices have already been selected AND
              // if the current item being clicked is being "unselected"
              // unselect item from list
              if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              }
            }
          : () => {
              if (selectedItems.includes(item)) {
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              } else {
                setSelectedItems([...selectedItems, item]);
              }
            }
      }
    >
      {/* Conditionally rendered checkmark */}
      {selectedItems.includes(item) && (
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
      {/* // TODO image + words */}
      {type === "Restaurants" && <div>{item.name}</div>}
      {type === "Friends" && <div>{item.name}</div>}

      {/* <RestaurantItem /> <PersonItem />*/}
      {/* <div>{index} Yo MAMA</div> */}
    </div>
  );
}
