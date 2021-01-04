import React, { useState } from "react";
import MultiVotingSelector from "./../../../components/MultiSelector/MultiVotingSelector";
import Axios from "axios";
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MakeSuggestionsDialog(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemIDs, setSelectedItemIDs] = useState([]);
  const [sending, setSending] = useState(false);
  const [sentOnce, setSentOnce] = useState(false);

  function handleVote(selectedItems) {
    setSelectedItems(selectedItems);
    setSelectedItemIDs(selectedItems.map((el) => el.id));
  }

  console.log(props);
  console.log(selectedItems.length === 1 ? selectedItems[0].id : "none");
  const choiceId = 19;
  return (
    <div className="motion-creation-page">
      <div className="VotePage-view">
        <MultiVotingSelector
          type={props.type}
          items={props.choices}
          selectedItems={selectedItems}
          selectedItemIDs={selectedItemIDs}
          setSelectedItems={(newSelected) => handleVote(newSelected)}
          limit={1}
        />
        <div className="confirm-vote-view">
          {sending && <div>sending</div>}
          {!sending && sentOnce && <div>sent</div>}
          <button
            className={
              selectedItems.length == 1 && props.type === "Suggestion"
                ? "move-on-button move-on"
                : "move-on-button"
            }
            // disabled={selectedRestaurants.length !== 4}
            // onClick={() => props.handleClick(props.type, props.selectedItems)}
            onClick={async () => {
              setSending(true);
              const result = await Axios.post(
                "http://localhost:5000/suggestions",
                { motionId: props.motionID, choiceId: selectedItems[0].id },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                      "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  },
                }
              )
                .then((res) => {
                  setSending(false);
                  setSentOnce(true);
                })
                .catch((e) => {
                  setSending(false);
                  console.log(e);
                });
              console.log(result);
            }}
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
