import React, { useState, useEffect } from "react";
import "./MotionWinnerPage.css";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function MotionWinnerPage(props) {
  const [redirect, setRedirect] = useState(false);
  const [winner, setWinner] = useState([]);
  const [complete, setComplete] = useState(false);

  useEffect(async () => {
    if (props.location.state === undefined || props.location.state === null) {
      setRedirect(true);
    } else {
      console.log(localStorage.getItem("token"));
      // props.location.state.motionId
      const resp = await Axios.get(
        `http://localhost:5000/motions/${props.location.state.motionId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setWinner(resp.data.winner.name);
      setComplete(true);
    }
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  switch (complete) {
    case true:
      return (
        <div className="motion-winner-page">
          <h1>And the winner is...</h1>
          <div className="winning-choice">
            <h1>{winner}</h1>
          </div>
        </div>
      );
    case false:
      return (
        <div className="home-page">
          <UseAnimations animation={loading} size={70} />
        </div>
      );
  }
}
