import { React, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector";
import axios from "axios";
export default function BuildFinalVotePage(props) {
  console.log(props.selectedItems);
  // console.log(props.selectedItems.length === 4);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);
  console.log(props.items);
  console.log(props.selectedItems);
  const motionID = props.items.map((a) => a.motion.id)[0];
  console.log("motionID: ", motionID);
  const motionOwnerID = props.items.map((a) => a.motion.owner_id.id)[0];
  console.log("motionOwnerID: ", motionOwnerID);

  const motionStatus = props.items.map((a) => a.motion.status)[0];
  console.log("motionStatus: ", motionStatus);

  const userId = localStorage.getItem("id");
  console.log("userID: ", localStorage.getItem("id"));
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
            props.selectedItems.length == 1 && props.type === "Vote-Page"
              ? "move-on-button move-on"
              : "move-on-button"
          }
          // disabled={selectedRestaurants.length !== 4}
          onClick={async () => {
            motionOwnerID == userId
              ? await axios.put(`http://localhost:5000/motions/${motionID}`, {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                      "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  },
                })
              : await axios.put(
                  "http://localhost:5000/motionuser",
                  { motionId: motionID, userId: userId },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods":
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                  }
                );
            if (motionStatus) {
              props.handleClick();
            }
          }}
        >
          <IconContext.Provider value={{ size: "30px" }}>
            <FaLongArrowAltRight />
          </IconContext.Provider>
        </button>
      </div>
      {motionOwnerID == userId ? (
        <button
          className="skipSuggestionBtn"
          onClick={() =>
            axios.put(`http://localhost:5000/motions/${motionID}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              },
            })
          }
        >
          Close Motion
        </button>
      ) : null}
      ;
    </div>
  );
}
