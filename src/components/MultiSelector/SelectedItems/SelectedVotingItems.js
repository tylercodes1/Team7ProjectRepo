import React, { useEffect, useState } from "react";
import "./SelectedItems.css";

import BuildVotingItem from "./BuildVotingItem";
export default function SelectedVotingItems(props) {
  // console.log("SelectedVotingItems props: ");
  // console.log(props);

  return (
    <div className="selected-items">
      <p>{props.type !== undefined && `Selected ${props.type}`}</p>
      {props.selectedItems.map((el, index) => (
        <BuildVotingItem
          key={index}
          el={el}
          index={index}
          removeSuggestion={(id) => props.removeSuggestion(id)}
        />
      ))}
    </div>
  );
}
