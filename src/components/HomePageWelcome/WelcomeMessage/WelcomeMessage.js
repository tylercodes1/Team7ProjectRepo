import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./WelcomeMessage.css";

export default function WelcomeMessage() {

  return (
    <div className="welcome-message">
      <p className="message">Let’s figure out where to eat!</p>
      <button
        className="welcome-message-button"
        onClick={() => console.log("route to screen")}
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
