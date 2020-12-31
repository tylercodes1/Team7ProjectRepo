import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import {getChoices} from "../../../api/api";
import BuildSuggestionPage from "../../MotionVotingPage/BuildSuggestionPage/BuildSuggestionPage"
import BuildMotionWinnerPage from "../BuildMotionWinnerPage/BuildMotionWinnerPage"
import BuildFinalVotePage from "../BuildFinalVotePage/BuildFinalVotePage";

export default function BuildVotePage(props) {
  
  const [suggestion, setSuggestion] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);

  const [action, setAction] = useState(1);

  useEffect(async () => {
    const result = await getChoices();
    setSuggestion(result);
    console.log(result);
  }, []);
  function handleSkip(){
    setAction(action + 2);
  }
  function handleSuggestion(){
    setAction(action + 1)
  }
  function handleClick() {
    if (selectedSuggestion.length == 1){
      setAction(action + 1); 
    }
          
  }
  switch (action) {
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
            <button className = "makeSuggestionBtn"onClick={() => handleSuggestion()}>Make a suggestion</button>            
            <button className = "skipSuggestionBtn" onClick={() => handleSkip()}>Skip suggestion</button>
        </div>
      );
    case 2:
      return (
          <BuildSuggestionPage
                type="Suggestion"
                items={suggestion}
                selectedItems = {selectedSuggestion}
                setSelectedItems = {setSelectedSuggestion}
                handleClick={handleClick}
            />
      )
    case 3: 
      return (
          <BuildFinalVotePage 
                type="Vote-Page"
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
