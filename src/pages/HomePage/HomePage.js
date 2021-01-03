import React, { useState, useEffect } from "react";
import { getMotions } from "../../api/api";
import "./HomePage.css";
import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
import HomePageMotions from "./HomePageMotions";
import { Redirect } from "react-router-dom";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function HomePage() {
  const [motions, setMotion] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [motionId, setMotionId] = useState(-1);
  const [complete, setComplete] = useState(false);

  useEffect(async () => {
    await getMotions()
      .then((resp) => {
        setMotion(resp);
        setComplete(true);
      })
      .catch((e) => {
        setMotion(null);
        setComplete(true);
      });
  }, []);

  if (redirect) {
    console.log(motionId);
    return (
      <Redirect
        to={{
          pathname: "/motion-vote",
          state: {
            motionId: motionId,
          },
        }}
      />
    );
  }

  function handleClick(motionId) {
    setMotionId(motionId);
    setRedirect(true);
  }

  switch (complete) {
    case true:
      if (motions === undefined || motions === null) {
        localStorage.clear();
        alert("Servers are down");
        return <Redirect to="login" />;
      }
      return (
        <>
          <div className="home-page">
            {motions.length === 0 && <HomePageWelcome />}
            {motions.length !== 0 && (
              <HomePageMotions
                motions={motions}
                handleClick={(motionId) => handleClick(motionId)}
              />
            )}
          </div>
        </>
      );
    case false:
      return (
        <div className="home-page">
          <UseAnimations animation={loading} size={70} />
        </div>
      );
  }
}
