import React, { useState, useEffect } from "react";
import "./MotionVotingPage.css";
import { getMotionChoices } from "../../api/api";
import BuildVotePage from "./BuildVotePage/BuildVotePage";
import BuildOwnerVotePage from "./BuildVotePage/BuildOwnerVotePage";
import axios from "axios";


export default function MotionVotingPage() {
    const [restaurants, setRestaurants] = useState([]);
    const isOwner = true;
    const userId = localStorage.getItem("id");
    console.log("userID: ",localStorage.getItem("id"))
    const motionOwnerId = restaurants.map(a => a.motion.owner_id.id)[0];
    console.log("motionOwnerId: ", motionOwnerId);
    useEffect(async (e) => {
        
        const result = await axios.get("http://localhost:5000/motionchoices", { 
            headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then(res => {
                setRestaurants(res.data);
                console.log(res.data)
            });
    }, []);
    const motionId = restaurants.map(a =>a.motion.id);

    console.log(motionId[0]);
    console.log(restaurants);
          
        
    return ( userId != motionOwnerId ?  
        (<BuildOwnerVotePage type="Vote" items = {restaurants} motionID = {motionId[0]} />) :
        (<BuildVotePage type="Vote" items = {restaurants}  motionID = {motionId[0]}/>));
}