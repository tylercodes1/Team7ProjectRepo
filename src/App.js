import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [background, setBackground] = useState(false);
  function handleClick() {
    setBackground(!background);
  }
  return (
      <div className={background? 'showcase' : 'showcase shank'} >
          <Router>
            <NavBar onNavBarClick={handleClick}></NavBar>
            <Switch>
              <Route exact path= "/" component = {HomePage}/>
              <Route exact path = "/login" component = {LoginPage}/> 
              <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>   
            </Switch>
          </Router>
        <div className='App' id='mainBody' >
          <h1>Yo</h1>
        </div>
    </div>
  );
}

export default App;
