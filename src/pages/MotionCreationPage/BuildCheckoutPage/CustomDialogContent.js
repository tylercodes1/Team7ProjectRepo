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
  const [completed, setCompleted] = useState([]);
  // TO BE ASYNC
  async function handleApiCall() {
    let result1 = [];
    let result2 = [];
    let result3 = [];
    let users = [
      {
        id: 1,
        name: "Macy",
        password: "password1",
        isAdmin: false,
      },
      {
        id: 2,
        name: "John Doe",
        password: "password2",
        isAdmin: false,
      },
      {
        id: 3,
        name: "Fella",
        password: "password3",
        isAdmin: false,
      },
      {
        id: 4,
        name: "Tyler",
        password: "password1",
        isAdmin: false,
      },
    ];

    let choices = [
      {
        id: 9,
        name: "Panda Express",
        owner_id: 2,
      },
      {
        id: 10,
        name: "Dairy Queen",
        owner_id: 2,
      },
      {
        id: 11,
        name: "Olive Garden",
        owner_id: 3,
      },
      {
        id: 13,
        name: "Chic-fil-a",
        owner_id: 6,
      },
    ];

    result1 = await addMotion({ title: "Motion Title" })
      .then(async (res) => {
        console.log("res2");
        console.log(res);
        let resp = [];
        for (const choice of choices) {
          // console.log(choice);
          const addedChoice = await addMotionChoice({
            motion_id: 2,
            choice_id: 1,
          });
          resp.push(addedChoice);
        }
        return resp;
      })
      .then(async (res) => {
        console.log("res11");
        console.log(res);
        let resp = [];
        for (const user of users) {
          // console.log(user);
          const addedUser = await addMotionUser({
            motion_id: res.id,
            user_id: user.id,
          });
          resp.push(addedUser);
        }

        return resp;
      })
      .then((res) => {
        console.log("res3");
        console.log(res);
        setCompleted(true);
      })
      .catch((err) => {
        alert(err);
      });
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
