import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./WelcomeMessage.css";
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../../store/actions/actionTypes'

export default function WelcomeMessage() {

  // test for redux
  const isLogged = useSelector (state => state.isLogged);
  const dispatch = useDispatch();
  // test for redux 


  return (
    <div className="welcome-message">
      {isLogged ? <h1>You have loged in.</h1> : <p className="message">Let’s figure out where to eat!</p>}
      <button
        className="welcome-message-button"
        // onClick={() => console.log("route to screen")}
        // test for redux
        onClick = {() => dispatch(login())}
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
