import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TestRedux from "./pages/TestRedux";
import LoginNSignup from "./pages/LoginNSignup/LoginNSignup";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import MotionCreationPage from "./pages/MotionCreationPage/MotionCreationPage";
import MotionPage from "./pages/Motion/MotionPage";

function App() {
  const [background, setBackground] = useState(false);
  function handleClick() {
    setBackground(!background);
  }
  return (
    <div className={background? 'showcase' : 'showcase Shrink'}>
      <Router>
        <NavBar onNavBarClick={handleClick}></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/motion-creation" component={MotionCreationPage} />
          <Route exact path="/login" component={LoginNSignup} />
          <Route exact path="/motion" component={MotionPage} />
          <Route exact path="/reduxTest" component={TestRedux} />
          <Route path="/" render={() => <div>404 NOT FOUND :)</div>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
