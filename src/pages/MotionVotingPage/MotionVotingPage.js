import React, { useState, useEffect } from "react";
import "./MotionVotingPage.css";
import { getMotionChoices } from "../../api/api";
import BuildVotePage from "./BuildVotePage/BuildVotePage";
import BuildOwnerVotePage from "./BuildVotePage/BuildOwnerVotePage";

export default function MotionVotingPage() {
    const [restaurants, setRestaurants] = useState([]);
    const isOwner = false;

    useEffect(async () => {
        const result = await getMotionChoices();
        setRestaurants(result);
        console.log(result);
    }, []);
    return (isOwner ?  
        (<BuildOwnerVotePage type="Vote" items = {restaurants} />) :
        (<BuildVotePage type="Vote" items = {restaurants} />));
}