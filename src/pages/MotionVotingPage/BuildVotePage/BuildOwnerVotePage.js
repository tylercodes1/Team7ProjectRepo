import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import { getChoices } from "../../../api/api";
import BuildOwnerSuggestionPage from "../BuildSuggestionPage/BuildOwnerSuggestionPage";
import BuildMotionWinnerPage from "../BuildMotionWinnerPage/BuildMotionWinnerPage";
import BuildFinalVotePage from "../BuildFinalVotePage/BuildFinalVotePage";
import axios from "axios";

export default function BuildOwnerVotePage(props) {
  console.log(props);
  const [ownerSuggestion, setOwnerSuggestion] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [move, setMove] = useState(1);
  const num = ownerSuggestion.map((a) => a.choice_id.name).length;
  useEffect(async (e) => {
    const result = await axios
      .get("http://localhost:5000/suggestions", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setOwnerSuggestion(res.data);
      });
  }, []);

  function handleUserSuggestion() {
    setMove(move + 1);
  }
  function handleClick() {
    setMove(move + 1);
  }
  function triggerDelete(index) {
    setOwnerSuggestion(
      ownerSuggestion.filter((l) => l !== ownerSuggestion[index])
    );
  }
  switch (move) {
    case 1:
      return (
        <div className="motion-creation-page">
          {props.type === "Vote" && <h1>Let's Vote</h1>}
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
          <button
            className="makeSuggestionBtn"
            onClick={() => handleUserSuggestion()}
          >
            You have {num} suggestions
          </button>
          <button className="skipSuggestionBtn">Close Motion</button>
        </div>
      );
    case 2:
      return (
        <BuildOwnerSuggestionPage
          type="Owner_Suggestion"
          items={ownerSuggestion}
          handleUserSuggestion={handleUserSuggestion}
          triggerDelete={triggerDelete}
        />
      );
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
      );
    case 4:
      return <BuildMotionWinnerPage />;
  }
}
