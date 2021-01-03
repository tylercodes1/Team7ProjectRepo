import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDialog } from "react-st-modal";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import {
  addMotion,
  addMotionChoice,
  addMotionUser,
  getChoices,
  getUsers,
  hello,
} from "../../../api/api";
import "./BuildCheckoutPage.css";
import { IconContext } from "react-icons";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function CustomDialogContent(props) {
  const [completed, setCompleted] = useState(false);
  // TO BE ASYNC
  async function handleApiCall() {
    await addMotion({ title: props.title })
      .then(async (res) => {
        console.log("res2");
        for (const choice of props.selectedChoices) {
          console.log(res.id);
          console.log(choice.id);
          const addedChoice = await addMotionChoice({
            id: res.id,
            choiceId: choice.id,
          });
          console.log(addedChoice);
        }
        return res.id;
      })
      .then(async (res) => {
        console.log("res11");
        console.log(res);
        const addMe = await addMotionUser({
          id: res,
          userId: localStorage.getItem("id"),
        });
        for (const user of props.selectedFriends) {
          const addedUser = await addMotionUser({
            id: res,
            userId: user.id,
          });
          console.log(addedUser);
        }

        // return resp;
      })
      .then((res) => {
        console.log("res3");
        console.log(res);
        setCompleted(true);
      });
    // .catch((err) => {
    //   alert(err);
    // });
  }

  useEffect(() => {
    handleApiCall();
  }, []);

  const dialog = useDialog();
  return (
    <div className="custom-dialog-content">
      {buildApiCalls(completed)}
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(true);
        }}
      >
        cancel API call?
      </button>
    </div>
  );
}

function buildApiCalls(completed) {
  return (
    <div className="api-validation">
      {!completed && <UseAnimations animation={loading} />}
      {completed && (
        <IconContext.Provider value={{ size: "30px" }}>
          <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>
        </IconContext.Provider>
      )}
      <p>Create Motion, Add Choices, Add Friends</p>
    </div>
  );
}
