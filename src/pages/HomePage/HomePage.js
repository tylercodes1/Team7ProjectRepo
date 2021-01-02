// import React from "react";
// import {useHistory} from "react-router-dom";
// import "./HomePage.css";
// import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";
// export default class HomePage extends React.Component {

//  //history = useHistory();

//   render() {
//     return (
//       <>
//         <div className="home-page">
//           <HomePageWelcome />
//         </div>
//       </>
//     );
//   }
// }

import React from 'react'
import "./HomePage.css";
import HomePageWelcome from "./../../components/HomePageWelcome/HomePageWelcome";

function HomePage() {


  return (
    <div className="home-page">
      <HomePageWelcome />
    </div>
  )
}

export default HomePage
