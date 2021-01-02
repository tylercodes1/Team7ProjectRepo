import React, { useState } from "react";
import SelectedItems from "./../../../components/MultiSelector/SelectedItems/SelectedItems";
import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { CustomDialog } from "react-st-modal";
import CustomDialogContent from "./CustomDialogContent";
import { Redirect } from "react-router-dom";

export default function BuildCheckoutPage(props) {
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState("");

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="checkout-page">
      <h1>Does this look right?</h1>
      <div className="view-filler">
        <div className="summary-window">
          <input
            className="title-input"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder={`${localStorage.getItem("name")}'s Motion`}
          />
          <SelectedItems
            type="Restaurant"
            selectedItems={props.selectedRestaurants}
          />
          <div className="summary-friend-view">
            {props.selectedFriends.map((el, key) => buildFriend(el, key))}
          </div>
          <button
            className="move-on-button move-on finish-up"
            onClick={async () => {
              const result = await CustomDialog(
                <CustomDialogContent
                  selectedChoices={props.selectedRestaurants}
                  selectedFriends={props.selectedFriends}
                  title={
                    title.length === 0
                      ? `${localStorage.getItem("name")}'s Motion`
                      : title
                  }
                />,
                {
                  title: "Custom Dialog",
                  showCloseIcon: true,
                }
              );
              console.log(result);
              if (!result) {
                alert("Cannot connect to servers");
              } else {
                setRedirect(true);
              }
            }}
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <GiKnifeFork />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

function buildFriend(selectedFriend, key) {
  return (
    <div className="summary-friend-item" key={key}>
      <div className="summary-profile-icon">
        <BsPersonFill></BsPersonFill>
      </div>
      <p>{selectedFriend.name}</p>
    </div>
  );
}
