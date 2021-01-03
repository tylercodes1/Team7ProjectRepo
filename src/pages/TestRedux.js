import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestRedux (props){
    const [winner, setWinner] = useState("");
    
        useEffect(async (e) => {
             await axios.get(`http://localhost:5000/motions/${props.motionID}`, { 
                headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then(res => {
                    console.log(res.data.winner.name)
                    setWinner(res.data.winner.name);
                });
            },[]);
        return (
            <>
                <div>
                    <h1>motion winner: {winner} </h1>
                </div>    
            </>
        )
    
}
