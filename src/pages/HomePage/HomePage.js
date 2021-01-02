import React from "react";
import {getMotions} from "../../api/api"
import "./HomePage.css";
import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      motion: []
    }
  }

  componentDidMount() {
    this.poll();
  }

  poll = async () => {
    this.setState({
      motion: await getMotions()
    });
  }

  render() {
    return (
      <>
        <div className="home-page">
          <HomePageWelcome />
          {
            this.state.motion.map((i, t) => {
              return (
                <p key={t}>Motion-title: {i.title} <br></br>Motion-owner: {i.owner_id.name} </p>
              );
            })
          }
        </div>
      </>
    );

// import { Redirect } from "react-router-dom";
// export default function HomePage() {
//   console.log(localStorage.getItem("token"));
//   if (localStorage.getItem("token") === null) {
//     return <Redirect to="/login" />;
// >>>>>>> main
//   }

//   return (
//     <>
//       <div className="home-page">
//         <HomePageWelcome></HomePageWelcome>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react'
// import "./HomePage.css";
// import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
// import Axios from "axios";
// import { getMotions } from "../../api/api";

// function HomePage() {

// const [motionData, setMotionData] =useState([""]);

// useEffect(() => {
//   getAllMotions();
// }, []);

// const getAllMotions = async () => {
//   const resp = await getMotions();
// }

//   return (
//     <div className="home-page">
//       <HomePageWelcome />
//     </div>
//   )
// }
export default HomePage
