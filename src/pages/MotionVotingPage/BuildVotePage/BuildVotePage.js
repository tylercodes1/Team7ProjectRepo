import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import {getChoices} from "../../../api/api";
import BuildSuggestionPage from "../../MotionVotingPage/BuildSuggestionPage/BuildSuggestionPage"
import BuildMotionWinnerPage from "../BuildMotionWinnerPage/BuildMotionWinnerPage"
import BuildFinalVotePage from "../BuildFinalVotePage/BuildFinalVotePage";
import axios from "axios";
export default function BuildVotePage(props) {
  console.log ("motionID: ", props.motionID)
  const [suggestion, setSuggestion] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);

  const [action, setAction] = useState(1);
  useEffect(async (e) => {
        
  const result = await axios.get("http://localhost:5000/choices", { 
      headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then(res => {
        setSuggestion(res.data);
      });
  }, []);
  console.log(suggestion);
  
  function handleSkip(){
    setAction(action + 2);
  }
  function handleSuggestion(){
    
      setAction(action + 1); 
    
  }
  function handleClick() {
    if (selectedRestaurants.length == 1 || selectedSuggestion.length == 1){
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
                motionID = {props.motionID}
                handleClick={handleClick}
            />
      )
    case 3: 
      return (
          <BuildFinalVotePage 
                type="Vote-Page"
                items={props.items}
                selectedItems={selectedRestaurants}
                setSelectedItems={(newSelected) =>
                setSelectedRestaurants(newSelected)
              }
                handleClick={handleClick}
          />
      )
    case 4: 
      return (
        <BuildMotionWinnerPage />
      )
  }
}
