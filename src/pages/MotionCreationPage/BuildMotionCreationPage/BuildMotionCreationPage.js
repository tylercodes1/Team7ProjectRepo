import { React } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import MultiSelector from "./../../../components/MultiSelector/MultiSelector.js";
import SelectedItems from "./../../../components/MultiSelector/SelectedItems/SelectedItems.js";

export default function BuildMotionCreationPage(props) {
  console.log(props);
  return (
    <div className="motion-creation-page">
      {props.type === "Restaurants" && (
        <h1>Choose {4 - props.selectedItems.length} Restaurants!</h1>
      )}
      {props.type === "Friends" && <h1>Invite Some Friends</h1>}
      <div className="creation-view">
        <MultiSelector
          type={props.type}
          items={props.items}
          selectedItems={props.selectedItems}
          setSelectedItems={(newSelected) =>
            props.setSelectedItems(newSelected)
          }
        />
        <div id="vertically-aligned-items">
          <SelectedItems
            type={props.type}
            selectedItems={props.selectedItems}
          />
          <button
            className={
              props.selectedItems.length === 4 || props.type === "Friends"
                ? "move-on-button move-on"
                : "move-on-button"
            }
            // disabled={selectedRestaurants.length !== 4}
            onClick={() => props.handleClick(props.type, props.selectedItems)}
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <FaLongArrowAltRight />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}
