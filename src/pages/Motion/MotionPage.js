import { React } from "react";
import "./MotionPage.css";

export default function MotionPage() {

  return <div className="motion-page">hello</div>;
}

// import React, { Component } from 'react'
// import "./MotionPage.css";
// import Axios from "axios";
// import { getChoices } from '../../api/api';

// export default class MotionPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       choice: []
//     }
//   }

//   componentDidMount() {
//     this.poll();
//   }

//   poll = async () => {
//     this.setState({
//       choice: await getChoices()
//     });
    
//     setTimeout(() => this.poll(), 5000);

//   //  console.log(this.state);
//   }

// // componentWillUnmount(){

// // }

// render() {
//   console.log(this.state.choice);
//   return (
//     <div>

//       <p>123</p>
//       {
//         this.state.choice.map((i, t) => {
//           return (
//             <p key={t}>{i.name}</p>
//           );
//         })
//       }
//     </div>
//   )
// }
// }

