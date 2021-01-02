import React from "react";
import "./HomePage.css";
import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
import { Redirect } from "react-router-dom";
export default function HomePage() {
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") === null) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="home-page">
        <HomePageWelcome></HomePageWelcome>
      </div>
    </>
  );
}
