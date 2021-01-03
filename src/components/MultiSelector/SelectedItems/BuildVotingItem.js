import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import axios from "axios";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function BuildVotingItem(props) {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  return (
    <div className="build-voting-item" key={props.index}>
      <div className="selected-item">{props.el.choice_id.name}</div>
      {sending === false && success === false && fail === false && (
        <div className="button-pairing" key={props.index}>
          <button
            className="check-button"
            onClick={async () => {
              setSending(true);
              await axios
                .post(
                  `http://localhost:5000/suggestions/${props.el.suggestionId}`,
                  { status: "APPROVED" },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                )
                .then(async (res) => {
                  await axios.delete(
                    `http://localhost:5000/suggestions/${props.el.suggestionId}`,
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    }
                  );
                })
                .then((e) => {
                  setSending(false);
                  setSuccess(true);
                  props.removeSuggestion(props.el.suggestionId);
                })
                .catch((e) => {
                  setSending(false);
                  setFail(true);
                });
            }}
          >
            <GiIcons.GiCheckMark />
          </button>
          <button
            className="close-button"
            key={props.index}
            onClick={async () => {
              setSending(true);
              await axios
                .delete(
                  `http://localhost:5000/suggestions/${props.el.suggestionId}`,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods":
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                  }
                )
                .then((el) => {
                  setSending(false);
                  setSuccess(true);
                  props.removeSuggestion(props.el.suggestionId);
                })
                .catch((e) => {
                  setSending(false);
                  setFail(true);
                });
            }}
          >
            <IoIcons.IoMdClose />
          </button>
        </div>
      )}
      {sending === true && (
        <div className="button-pairing">
          <UseAnimations animation={loading} />
        </div>
      )}
    </div>
  );
}
