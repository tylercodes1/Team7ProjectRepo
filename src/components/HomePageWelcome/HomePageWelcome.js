import { React } from "react";
import "./HomePageWelcome.css";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";
/**
 * This is a container component. Will handle the data fetching and will pass into the
 * views below (WelcomeTitle, WelcomeMessage )
 */
export default function HomePageWelcome() {
  // TODO fetch data

  // Pass props from data fetching into following components
  return (
    <div className="home-page-welcome">
      <WelcomeTitle></WelcomeTitle>
      <WelcomeMessage></WelcomeMessage>
    </div>
  );
}
