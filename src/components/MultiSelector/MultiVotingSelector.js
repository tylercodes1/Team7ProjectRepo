import React, { useState } from "react";
import "./MultiSelector.css";
import { GoCheck } from "react-icons/go";
import { IconContext } from "react-icons";

export default function MultiVotingSelector(props) {
  console.log(props);
  return (
    <div className="multi-selector">
      {props.items.map((el, index) =>
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
              // if {limit} choices have already been selected AND
              // if the current item being clicked is being "unselected"
              // unselect item from list
              if (selectedItemIDs.includes(item.id)) {
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              } else {
                console.log(item);
                console.log(item.id);
                selectedItems.map((e) => console.log(e.id));
                console.log(selectedItems.includes(146));
              }
            }
          : () => {
              if (selectedItemIDs.includes(item.id)) {
                console.log("remove");
                setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
              } else {
                console.log("adds");
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
      {type === "Friends" && <div>build Persons</div>}
      {type === "Vote" && <div>{item.choice.name}</div>}
      {type === "Suggestion" && <div>{item.name}</div>}
      {type === "Owner_Suggestion" && <div>{item.choice_id.name}</div>}
      {type === "Vote-Page" && <div>{item.choice.name}</div>}
      {/* <RestaurantItem /> <PersonItem />*/}
      {/* <div>{index} Yo MAMA</div> */}
    </div>
  );
}
