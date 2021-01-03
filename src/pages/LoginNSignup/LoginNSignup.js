import React, { useState } from "react";
import axios from "axios";
import { Login } from "../../api/api";
import "./LoginNSignup.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/actions/actionTypes";
import { Redirect } from "react-router-dom";

function LoginNSignup() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [signupFormData, setSignupFormData] = useState({
    name: "",
    password: "",
    confirmPass: "",
  });

  // Check if logged in, if yes, send to normal page
  if (localStorage.getItem("token") !== null) {
    return <Redirect to="" />;
  }
  if (redirect) {
    return <Redirect to="" />;
  }
  const doLogin = async (e) => {
    e.preventDefault();
    await handleLogin(e);
    if (localStorage.getItem("token") !== null) {
      setRedirect(true);
    }
    try {
      await Login(formData.username, formData.password);
      console.log("clicked");
    } catch {
      console.log("couldn't login");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/signin", {
        name: formData.username,
        password: formData.password,
      })
      .then((response) => {
        console.log("Successful user login: ", response.data);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("admin", response.data.admin);
        //Need to store the user name and id as well
      })
      .catch((error) => console.log(error));
  };

  const handleSignupFormChange = (event) => {
    setSignupFormData({
      ...signupFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (signupFormData.password == signupFormData.confirmPass) {
      axios
        .post("http://localhost:5000/api/auth/signup", signupFormData)
        .then((response) => {
          console.log("Successful user creation: ", response.data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log(
        "password and confirmed passwords do not match, please spell better."
      );
    }
  };

  if (isLogged) {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="login-toggle-buttons">
            <h1>Login</h1>
            <h1 onClick={() => dispatch(login())}>Sign-Up</h1>
          </div>

          <form onSubmit={doLogin}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData["username"]}
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              value={formData["password"]}
              onChange={handleChange}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="newuser-page">
        <div className="login-form">
          <div className="login-toggle-buttons">
            <h1 onClick={() => dispatch(login())}>Login</h1>
            <h1>Sign-Up</h1>
          </div>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              placeholder="username"
              value={signupFormData.name}
              onChange={handleSignupFormChange}
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              value={signupFormData.password}
              onChange={handleSignupFormChange}
            />
            <input
              type="text"
              name="confirmPass"
              placeholder="confirm-password"
              value={signupFormData.confirmPass}
              onChange={handleSignupFormChange}
            />
            <input type="submit" value="Create User" />
          </form>
        </div>
      </div>
    );
  }
}
export default LoginNSignup;
