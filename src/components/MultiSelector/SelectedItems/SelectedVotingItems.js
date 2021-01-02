import React from "react";
import "./SelectedItems.css";
import { AiOutlineCheck } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { GoCheck } from "react-icons/go";
import { IconContext } from "react-icons";
export default function SelectedVotingItems(props) {
  //console.log(props.type);
  //console.log(props.selectedItems);
  return (
    <div className="selected-items">
      <p>{props.type !== undefined && `Selected ${props.type}`}</p>
      {props.selectedItems.map((el, index) => (
        <div className="selected-item" key={index}>
            {el.name} 
            <button AiOutlineCheck> 
              <IconContext.Provider
                value={{
                  size: "30px",
                }}
              >
                <AiOutlineCheck />
            </IconContext.Provider>
            </button>
            <button AiOutlineCheck> 
              <IconContext.Provider
                value={{
                  size: "30px",
                }}
              >
                <AiOutlineClose />
            </IconContext.Provider>
            </button>
        </div>       
      ))}
      
    </div>
  );
}
