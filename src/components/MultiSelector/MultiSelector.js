import React, { useState } from "react";
import "./MultiSelector.css";
import { GoCheck } from "react-icons/go";
import { IconContext } from "react-icons";

export default function MultiSelector(props) {
  //console.log(props.selectedItems);
  //console.log(props.items);
  return (
    <div className="multi-selector">
      {props.items !== undefined &&
        props.items.map((el, index) =>
          BuildItem(
            props.type,
            index,
            el,
            props.selectedItems,
            props.selectedItemIDs,
            props.setSelectedItems,
            props.limit
          )
        )}
    </div>
  );
}

function BuildItem(
  type,
  index,
  item,
  selectedItems,
  selectedItemIDs,
  setSelectedItems,
  limit
) {
  return (
    // div is big because it has lots of conditional onclick-functionality
    <div
      className="selection-item"
      key={index}
      onClick={
        selectedItems.length === limit
          ? () => {
              // if 4 choices have already been selected AND
              // if the current item being clicked is being "unselected"
              // unselect item from list
              if (selectedItemIDs.includes(item.id)) {
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              }
            }
          : () => {
              if (selectedItemIDs.includes(item.id)) {
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              } else {
                setSelectedItems([...selectedItems, item]);
              }
            }
      }
    >
      {/* Conditionally rendered checkmark */}
      {selectedItemIDs.includes(item.id) && (
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
