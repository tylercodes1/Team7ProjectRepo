import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import {getChoices} from "../../../api/api";
import BuildOwnerSuggestionPage from "../BuildSuggestionPage/BuildOwnerSuggestionPage";
import BuildMotionWinnerPage from "../BuildMotionWinnerPage/BuildMotionWinnerPage"
import BuildFinalVotePage from "../BuildFinalVotePage/BuildFinalVotePage";


export default function BuildOwnerVotePage(props) {
    const [suggestion, setSuggestion] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState([]);
    const [move, setMove] = useState(1);
    const num = 0;
    useEffect(async () => {
      const result = await getChoices();
      setSuggestion(result);
      console.log(result);
    }, []);
    
    function handleUserSuggestion(){
        setMove(move + 1)
    }
    function handleClick() {
      if (selectedSuggestion.length == 1){
        setMove(move + 1); 
      }
            
    }
    switch (move) {
      case 1:
        return (
          <div className="motion-creation-page">
            {props.type === "Vote" && (<h1>Let's Vote</h1>)}
            <div className="VotePage-view">
              
              <MultiVotingSelector
                type={props.type}
                items={props.items}
                selectedItems={selectedRestaurants}
                setSelectedItems={(newSelected) =>
                  setSelectedRestaurants(newSelected)
                }
              />
            </div>
              <button className = "makeSuggestionBtn"onClick={() => handleUserSuggestion()}>You have {num} suggestions</button>            
              <button className = "skipSuggestionBtn" >Close Motion</button>
          </div>
        );
      case 2:
        return (
            <BuildOwnerSuggestionPage
                type="Suggestion"
                handleUserSuggestion={handleUserSuggestion}
            />
        )
      case 3: 
        return (
          <BuildFinalVotePage 
                type="Restaurants"
                items={suggestion}
                selectedItems = {selectedSuggestion}
                setSelectedItems = {setSelectedSuggestion}
                handleClick={handleClick}
          />
        )
      case 4: 
      return (
        <BuildMotionWinnerPage />
      )
    }
  }
  