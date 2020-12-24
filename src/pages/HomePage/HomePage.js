import React from "react";
import "./HomePage.css";
import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <HomePageWelcome></HomePageWelcome>
      </div>
    );
  }
}
