import React, { useState } from "react";
import "./WelcomeTitle.css";

export default function WelcomeTitle() {
  const [state, setState] = useState({ userMotions: [] });
  const user = state.userMotions.length === 0 ? "Tyler" : "Tian";
  return (
    <div className="title">
      {state.userMotions.length === 0
        ? "Start a Motion!"
        : `Join ${user}'s motion`}
    </div>
  );
}
