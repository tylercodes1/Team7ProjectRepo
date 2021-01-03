import React, { useState } from "react";
import SelectedItems from "./../../../components/MultiSelector/SelectedItems/SelectedItems";
import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { CustomDialog } from "react-st-modal";
import CustomDialogContent from "./CustomDialogContent";
import { Redirect } from "react-router-dom";
import MotionCreationPage, {poll} from "../MotionCreationPage"

export default function BuildCheckoutPage(props) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/" />;
  };
 
  console.log(props);
  return (
    <div className="checkout-page">
      <h1>Does this look right?</h1>
      <div className="view-filler">
        <div className="summary-window">
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
                  selectedRestaurants={props.selectedRestaurants}
                  selectedFriends={props.selectedFriends}
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
  console.log(selectedFriend);
  return (
    <div className="summary-friend-item" key={key}>
      <div className="summary-profile-icon">
        <BsPersonFill></BsPersonFill>
      </div>
      <p>{selectedFriend.name}</p>
    </div>
  );
}
