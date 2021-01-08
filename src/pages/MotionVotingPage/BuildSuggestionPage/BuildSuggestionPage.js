import { React, useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import Axios from "axios";
import axios from "axios";
import { async } from "./../../../api/api";

export default function BuildSuggestionPage(props) {
  // console.log(props.items);
  // console.log(props.selectedItems);
  console.log(props);

  const choiceId = props.selectedItems.map((a) => a.id)[0];
  console.log("motionID: ", props.motionID);
  console.log("choiceId: ", choiceId);

  // console.log(props.selectedItems.length === 4);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);

  return (
    <div className="motion-creation-page">
      {props.type === "Vote" && <h1>Let's Vote</h1>}

      <div className="VotePage-view">
        <MultiVotingSelector
          type={props.type}
          items={props.items}
          selectedItems={props.selectedItems}
          setSelectedItems={(newSelected) =>
            props.setSelectedItems(newSelected)
          }
        />
        <button
          className={
            props.selectedItems.length == 1 && props.type === "Suggestion"
              ? "move-on-button move-on"
              : "move-on-button"
          }
          // disabled={selectedRestaurants.length !== 4}
          // onClick={() => props.handleClick(props.type, props.selectedItems)}
          onClick={async () => {
            await axios
              .post(
                "http://localhost:5000/suggestions",
                { motionId: props.motionID, choiceId: choiceId },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                      "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  },
                }
              )
              .catch((e) => {
                console.log(e);
              });
            props.handleClick(props.type, props.selectedItems);
          }}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <FaLongArrowAltRight />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
