import React, { useState, useEffect } from "react";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import { getChoices } from "../../../api/api";
import BuildOwnerSuggestionPage from "../BuildSuggestionPage/BuildOwnerSuggestionPage";
import BuildMotionWinnerPage from "../BuildMotionWinnerPage/BuildMotionWinnerPage";
import BuildFinalVotePage from "../BuildFinalVotePage/BuildFinalVotePage";
import axios from "axios";
import SuggestionsDialog from "./SuggestionsDialog";
import { CustomDialog } from "react-st-modal";
import { IoMdSend } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function BuildOwnerVotePage(props) {
  console.log(localStorage.getItem("token"));
  console.log("VotingOwnerPage props:");
  console.log(props);
  const [ownerSuggestion, setOwnerSuggestion] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedRestaurantIDs, setSelectedRestaurantIDs] = useState([]);
  const [move, setMove] = useState(1);
  const [confirmedVote, setConfirmedVote] = useState("");
  const [sending, setSending] = useState(false);
  const [sentOnce, setSentOnce] = useState(false);

  useEffect(async (e) => {
    const result = await axios
      .get("http://localhost:5000/suggestions", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setOwnerSuggestion(res.data);
      });
  }, []);

  function handleVote(selectedItems) {
    setSelectedRestaurants(selectedItems);
    setSelectedRestaurantIDs(selectedItems.map((el) => el.id));
  }

  function handleUserSuggestion() {
    // setMove(move + 1);
  }
  function handleClick() {
    setMove(move + 1);
  }
  function setOnaSuggestions(newList) {
    console.log(newList);
    setOwnerSuggestion(newList);
  }

  async function handleClose() {
    console.log(props.motionID);
    const res = await axios.put(
      `http://localhost:5000/motions/${props.motionID}`,
      null,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    console.log(res);
  }

  switch (move) {
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
                <SuggestionsDialog
                  type="Owner_Suggestion"
                  items={ownerSuggestion}
                  handleUserSuggestion={handleUserSuggestion}
                  setOnaSuggestions={(newList) => setOnaSuggestions(newList)}
                />,
                {
                  title: "Custom Dialog",
                  isCanClose: true,
                  showCloseIcon: true,
                }
              );
            }}
          >
            You have {ownerSuggestion.length} suggestions
          </button>
          <button
            className="skipSuggestionBtn"
            onClick={async () => await handleClose()}
          >
            Close Motion
          </button>
        </div>
      );
    // case 2:
    //   return (
    //     <BuildOwnerSuggestionPage
    //       type="Owner_Suggestion"
    //       items={ownerSuggestion}
    //       handleUserSuggestion={handleUserSuggestion}
    //       triggerDelete={triggerDelete}
    //     />
    //   );
    // case 3:
    //   return (
    //     <BuildFinalVotePage
    //       type="Vote-Page"
    //       items={props.items}
    //       selectedItems={selectedRestaurants}
    //       setSelectedItems={(newSelected) =>
    //         setSelectedRestaurants(newSelected)
    //       }
    //       handleClick={handleClick}
    //     />
    //   );
    // case 4:
    //   return <BuildMotionWinnerPage />;
  }
}
