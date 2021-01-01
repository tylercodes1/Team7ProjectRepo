import { React, useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import MultiVotingSelector from "../../../components/MultiSelector/MultiVotingSelector.js";
import Axios from 'axios'
import axios from 'axios'

export default function BuildSuggestionPage(props) {
  console.log(props.selectedItems);
  // console.log(props.selectedItems.length === 4);
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);
  // const result = axios.get("localhost:5000/choices").then((response) => {
  //   console.log("getAllChoices: ", response.data);
  // })


  useEffect(async () => {
    
    const fetchData = async () => {
        try {
            const result = await Axios.get(
                'localhost:5000/hello'
            )

            console.log(result.data)
        } catch (e) {
            console.log(e)
            console.log(e.response)
        }
    }
    fetchData()
}, [])
  // axios.get("localhost:5000/hello")
  //       .then((response) => {
  //         console.log("Choices: ", response.data);
  //       })
  //       .catch((error) => console.log(error));

  return (
    <div className="motion-creation-page">
      {props.type === "Vote" && (<h1>Let's Vote</h1>)}
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
            onClick={() => props.handleClick(props.type, props.selectedItems)}
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <FaLongArrowAltRight />
            </IconContext.Provider>
          </button>
      </div>
    </div>
  );
}