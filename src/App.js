import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import MotionCreationPage from "./pages/MotionCreationPage/MotionCreationPage";

function App() {
  const [background, setBackground] = useState(false);
  function handleClick() {
    setBackground(!background);
  }
  return (
    <div className="App">
      <Router>
        <NavBar onNavBarClick={handleClick}></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/motion-creation" component={MotionCreationPage} />
          <Route path="/" render={() => <div>404 NOT FOUND :)</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
