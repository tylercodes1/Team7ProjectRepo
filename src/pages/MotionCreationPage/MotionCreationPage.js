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
import Axios, { axios } from "axios";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

export default function MotionCreationPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurantIDs, setSelectedRestaurantIDs] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedFriendIDs, setSelectedFriendIDs] = useState([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [action, setAction] = useState(1);
  const [open, setOpen] = useState(false);
  const [complete, setComplete] = useState(false);

  function handleClick(type, selectedItems) {
    if (type === "Restaurants") {
      if (selectedItems.length === 4) {
        setAction(action + 1);
      }
    } else {
      setAction(action + 1);
    }
  }

  function handleRestaurants(selectedChoices) {
    setSelectedRestaurants(selectedChoices);
    setSelectedRestaurantIDs(selectedChoices.map((el) => el.id));
  }

  function handleFriends(selectedChoices) {
    setSelectedFriends(selectedChoices);
    setSelectedFriendIDs(selectedChoices.map((el) => el.id));
  }

  useEffect(async () => {
    let mounted = true;
    const poll = async () => {
      if (!mounted) {
        return;
      }

      console.log("polling");

      if (mounted) {
        const restaurantsResult = await getChoices();
        const friendsResult = await getUsers();
        setRestaurants(restaurantsResult);
        setFriends(friendsResult);
        setComplete(true);
        if (action !== 3) {
          console.log(action);
          setTimeout(() => poll(), 2500);
        }
      }
    };

    const onMount = async () => {
      console.log("mounting");
      poll();
    };

    const onUnmount = async () => {
      console.log("running unmounted");
      mounted = false;
    };

    onMount();

    return onUnmount;
  }, []);

  //console.log(restaurants);
  //console.log(selectedRestaurants);

  switch (complete) {
    case true:
      switch (action) {
        case 1:
          // TODO API call for Restaurants
          return (
            <BuildMotionCreationPage
              type="Restaurants"
              items={restaurants}
              selectedItems={selectedRestaurants}
              selectedItemIDs={selectedRestaurantIDs}
              setSelectedItems={handleRestaurants}
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
              selectedItemIDs={selectedFriendIDs}
              setSelectedItems={handleFriends}
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
    case false:
      return (
        <div className="home-page">
          <UseAnimations animation={loading} size={70} />
        </div>
      );
  }
}
