import React, { useState } from "react";
import { useDialog } from "react-st-modal";
import BuildOwnerSuggestionPage from "./../BuildSuggestionPage/BuildOwnerSuggestionPage";
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";
import SelectedVotingItems from "./../../../components/MultiSelector/SelectedItems/SelectedVotingItems";

export default function SuggestionsDialog(props) {
  // console.log("Suggestion Dialog Props: ");
  // console.log(props);
  const dialog = useDialog();
  // need this state for dialog, props cannot be rerendered
  // in dialog unless reopened
  const [localSuggestions, setLocalSuggestions] = useState(props.items);
  return (
    <div>
      <div className="Suggestion-window">
        <SelectedVotingItems
          type="Suggestion"
          selectedItems={localSuggestions}
          removeSuggestion={(id) => {
            const newSuggs = localSuggestions.filter(
              (el) => el.suggestionId !== id
            );
            // Janky solution. Take some time to study someday
            setLocalSuggestions(newSuggs);
            props.setOnaSuggestions(newSuggs);
          }}
        />
      </div>
    </div>
  );
}
