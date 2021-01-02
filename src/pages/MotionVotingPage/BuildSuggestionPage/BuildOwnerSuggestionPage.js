import React, { useState, useEffect } from "react";
import "./BuildOwnerSuggestionPage.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { getMotionChoices } from "../../../api/api";
import SelectedVotingItems from "../../../components/MultiSelector/SelectedItems/SelectedVotingItems";
export default function BuildOwnerSuggestionPage(props) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(async () => {
        const result = await getMotionChoices();
        setRestaurants(result);
        console.log(result);
    }, []);
    return (
      <div >
            <div className="Suggestion-window">
              <SelectedVotingItems
                type="Suggestion"
                selectedItems={restaurants}
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