import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import TestRedux from "./pages/TestRedux";
import LoginNSignup from "./pages/LoginNSignup/LoginNSignup";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import MotionCreationPage from "./pages/MotionCreationPage/MotionCreationPage";

import MotionVotingPage from "./pages/MotionVotingPage/MotionVotingPage";

import MotionPage from "./pages/Motion/MotionPage";
import MotionWinnerPage from "./pages/MotionWinnerPage/MotionWinnerPage";

function App() {
  const [background, setBackground] = useState(false);
  function handleClick() {
    setBackground(!background);
  }
  return (
    <div className={background ? "showcase" : "showcase Shrink"}>
      <Router>
        <NavBar onNavBarClick={handleClick}></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginNSignup} />
          <Route exact path="/motion" component={MotionPage} />
          <Route exact path="/motion-creation" component={MotionCreationPage} />
          <Route exact path="/motion-vote" component={MotionVotingPage} />
          <Route exact path="/reduxTest" component={TestRedux} />
          <Route exact path="/motion-winner" component={MotionWinnerPage} />
          <Route path="/" render={() => <div>404 NOT FOUND :)</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
