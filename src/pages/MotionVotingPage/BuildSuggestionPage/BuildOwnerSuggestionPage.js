import React, { useState, useEffect } from "react";
import "./BuildOwnerSuggestionPage.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import SelectedVotingItems from "../../../components/MultiSelector/SelectedItems/SelectedVotingItems";
import axios from "axios";

export default function BuildOwnerSuggestionPage(props) {
    const [suggestion, setSuggestion] = useState([]);
    console.log(props.items)
    const suggestionsName = props.items.map(a =>a.choice_id.name);
    console.log("Owner_Suggestion: ",suggestionsName)
    return (
      <div >
            <div className="Suggestion-window">
              <SelectedVotingItems
                type="Suggestion"
                selectedItems={props.items}
                triggerDelete= {props.triggerDelete}
              />
        </div>
        <button
          className="move-on-button move-on"
              
          
          // disabled={selectedRestaurants.length !== 4}
          onClick={() => props.handleUserSuggestion()}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <FaLongArrowAltRight />
          </IconContext.Provider>
        </button>
      </div>
        
        
      );
} 