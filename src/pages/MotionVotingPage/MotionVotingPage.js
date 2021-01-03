import React, { useState, useEffect } from "react";
import "./MotionVotingPage.css";
import { getMotionChoices } from "../../api/api";
import BuildVotePage from "./BuildVotePage/BuildVotePage";
import BuildOwnerVotePage from "./BuildVotePage/BuildOwnerVotePage";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

/**
 *
 * @param {props.location.state.motionId} props
 * Can only access this page via redirect from homepage
 */
export default function MotionVotingPage(props) {
  const [motionId, setMotionId] = useState();
  const [motionChoices, setMotionChoices] = useState([]);
  const userId = localStorage.getItem("id");
  const [motionOwnerId, setMotionOwnerId] = useState(-1);
  const [complete, setComplete] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(async (e) => {
    if (props.location.state === undefined || props.location.state === null) {
      setRedirect(true);
    } else {
      setMotionId(props.location.state.motionId);
      const result = await axios
        .get(
          `http://localhost:5000/motionchoices/${props.location.state.motionId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(async (res) => {
          setMotionChoices(res.data);
          console.log(res.data);
          const resp = await axios.get(
            `http://localhost:5000/motions/${props.location.state.motionId}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setMotionOwnerId(resp.data.owner_id.id);
          setComplete(true);
        })
        .catch((e) => {
          console.log("here");
          setRedirect(true);
        });
    }
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }
  //   const motionId = motionChoices.map((a) => a.motion.id);
  // TODO add condition back
  //   userId != motionOwnerId ?
  switch (complete) {
    case true:
      return false ? (
        <BuildOwnerVotePage
          type="Vote"
          motionChoices={motionChoices}
          motionID={motionId}
        />
      ) : (
        <BuildVotePage
          type="Vote"
          motionChoices={motionChoices}
          motionID={motionId}
        />
      );
    case false:
      return (
        <div className="loading-data">
          <UseAnimations animation={loading} size={70} />
        </div>
      );
  }
}
