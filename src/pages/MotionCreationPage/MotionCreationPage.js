import React, { useState, useEffect } from "react";
import "./MotionCreationPage.css";
import SelectedItems from "../../components/MultiSelector/SelectedItems/SelectedItems";
import { GiKnifeFork } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BsPersonFill } from "react-icons/bs";
import { CustomDialog, useDialog } from "react-st-modal";
import BuildMotionCreationPage from "./BuildMotionCreationPage/BuildMotionCreationPage";
import BuildCheckoutPage from "./BuildCheckoutPage/BuildCheckoutPage";
import { addMotion, getChoices, getUsers } from "../../api/api";

export default function MotionCreationPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [action, setAction] = useState(1);
  const [open, setOpen] = useState(false);

  function handleClick(type, selectedItems) {
    if (type === "Restaurants") {
      if (selectedItems.length === 4) {
        setAction(action + 1);
      }
    } else {
      setAction(action + 1);
    }
  }

  useEffect(async () => {
    const restaurantsResult = await getChoices();
    const friendsResult = await getUsers();
    // console.log(await addMotion({ title: "motion3" }));
    console.log(restaurantsResult);
    console.log(friendsResult);
    setRestaurants(restaurantsResult);
    setFriends(friendsResult);
  }, []);

  switch (action) {
    case 1:
      // TODO API call for Restaurants
      return (
        <BuildMotionCreationPage
          type="Restaurants"
          items={restaurants}
          selectedItems={selectedRestaurants}
          setSelectedItems={setSelectedRestaurants}
          handleClick={handleClick}
        />
      );

    case 2:
      // TODO API Call for Friends
      return (
        <BuildMotionCreationPage
          type="Friends"
          items={friends}
          selectedItems={selectedFriends}
          setSelectedItems={setSelectedFriends}
          handleClick={handleClick}
        />
      );

    case 3:
      return (
        <BuildCheckoutPage
          selectedFriends={selectedFriends}
          selectedRestaurants={selectedRestaurants}
        ></BuildCheckoutPage>
      );
  }
}
