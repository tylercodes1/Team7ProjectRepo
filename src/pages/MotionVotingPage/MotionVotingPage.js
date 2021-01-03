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
  const [restaurants, setRestaurants] = useState([]);
  const userId = localStorage.getItem("id");
  const [motionOwnerId, setMotionOwnerId] = useState(-1);
  const [complete, setComplete] = useState(false);

  useEffect(async (e) => {
    setMotionId(props.location);
    const result = await axios
      .get(
        `http://localhost:5000/motionchoices/${props.location.state.motionId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(async (res) => {
        setRestaurants(res.data);
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
      .catch((e) => console.log(e));
  }, []);

  if (motionId === null) {
    return <Redirect to="/" />;
  }
  //   const motionId = restaurants.map((a) => a.motion.id);
  console.log(restaurants);
  console.log(motionOwnerId);
  console.log(setMotionOwnerId);

  // TODO add condition back
  //   userId != motionOwnerId ?
  switch (complete) {
    case true:
      return true ? (
        <BuildOwnerVotePage
          type="Vote"
          items={restaurants}
          motionID={motionId}
        />
      ) : (
        <BuildVotePage type="Vote" items={restaurants} motionID={motionId} />
      );
    case false:
      return (
        <div className="loading-data">
          <UseAnimations animation={loading} size={70} />
        </div>
      );
  }
}
