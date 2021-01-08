import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import axios from "axios";
import { CustomDialog } from "react-st-modal";
import MakeSuggestionsDialog from "./MakeSuggestionsDialog";
import { IoMdSend } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function BuildVotePage(props) {
  console.log("motionID: ", props.motionID);
  const [choices, setChoices] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedRestaurantIDs, setSelectedRestaurantIDs] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);
  const [sending, setSending] = useState(false);
  const [sentOnce, setSentOnce] = useState(false);
  const [action, setAction] = useState(1);

  useEffect(async (e) => {
    const result = await axios
      .get("http://localhost:5000/choices", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setChoices(res.data);
      });
  }, []);
  console.log(choices);

  function handleVote(selectedItems) {
    setSelectedRestaurants(selectedItems);
    setSelectedRestaurantIDs(selectedItems.map((el) => el.id));
  }

  switch (action) {
    case 1:
      return (
        <div className="motion-creation-page">
          {props.type === "Vote" && <h1>Let's Vote</h1>}
          <div className="VotePage-view">
            <MultiVotingSelector
              type={props.type}
              items={props.motionChoices}
              selectedItems={selectedRestaurants}
              selectedItemIDs={selectedRestaurantIDs}
              setSelectedItems={(newSelected) => handleVote(newSelected)}
              limit={1}
            />
            <div className="confirm-vote-view">
              {sending && <div>sending</div>}
              {!sending && sentOnce && <div>sent</div>}
              <button
                disabled={selectedRestaurantIDs.length !== 1}
                className="submit-vote-button"
                onClick={async () => {
                  setSending(true);
                  console.log(props.motionID);
                  console.log(selectedRestaurantIDs[0]);
                  await axios
                    .put(
                      "http://localhost:5000/motionuser",
                      {
                        motionId: props.motionID,
                        voteid: selectedRestaurants[0].choice.id,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    )
                    .then((el) => {
                      setSentOnce(true);
                      setSending(false);
                    })
                    .catch((el) => {
                      setSentOnce(true);
                      setSending(false);
                    });
                }}
              >
                <IconContext.Provider
                  value={{
                    size: "30px",
                  }}
                >
                  <IoMdSend />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          <button
            className="makeSuggestionBtn"
            onClick={async () => {
              await CustomDialog(
                <MakeSuggestionsDialog
                  motionID={props.motionID}
                  type="Suggestion"
                  choices={choices}
                />,
                {
                  title: "Custom Dialog",
                  isCanClose: true,
                  showCloseIcon: true,
                }
              );
            }}
          >
            Make a suggestion
          </button>
        </div>
      );
    // case 2:
    //   return (
    //       <BuildSuggestionPage
    //             type="Suggestion"
    //             items={choices}
    //             selectedItems = {selectedSuggestion}
    //             setSelectedItems = {setSelectedSuggestion}
    //             motionID = {props.motionID}
    //             handleClick={handleClick}
    //         />
    //   )
    // case 3:
    //   return (
    //       <BuildFinalVotePage
    //             type="Vote-Page"
    //             items={props.items}
    //             selectedItems={selectedRestaurants}
    //             setSelectedItems={(newSelected) =>
    //             setSelectedRestaurants(newSelected)
    //           }
    //             handleClick={handleClick}
    //       />
    //   )
    // case 4:
    //   return (
    //     <BuildMotionWinnerPage />
    //   )
  }
}
