import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./WelcomeMessage.css";
import { useHistory } from "react-router-dom";

export default function WelcomeMessage() {

  const history = useHistory();
  return (
    <div className="welcome-message">
      <p className="message">Let’s figure out where to eat!</p>
      <button
        className="welcome-message-button"
        onClick={() => history.push('/motion-creation')}
        >
        <IconContext.Provider
          value={{
            size: "35px",
          }}
        >
          <FaPlus />
        </IconContext.Provider>
      </button>
    </div>
  );
}
