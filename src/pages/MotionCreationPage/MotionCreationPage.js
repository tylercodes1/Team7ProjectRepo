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




export default class MotionCreationPage extends React.Component {
  keepPolling = true

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRestaurantIDs: [],
      friends: [],
      selectedFriendIDs: [],
      selectedRestaurants: [],
      selectedFriends: [],
      action: 1
    };
  }

  handleClick = (type, selectedItems) => {
    if (type === "Restaurants") {
      if (selectedItems.length === 4) {
        this.setState((prev) => {
          return {
            action: prev.action + 1
          };
        });
      }
    } else {
      this.setState((prev) => {
        return {
          action: prev.action + 1
        };
      });
    }
    
    this.keepPolling = false;
  }

  handleRestaurants = (selectedChoices) => {
    this.setState({
      selectedRestaurants: selectedChoices,
      selectedRestaurantIDs: selectedChoices.map(e => e.id)
    });
  }

  handleFriends = (selectedChoices) => {
    this.setState({
      selectedFriends: selectedChoices,
      selectedFriendIDs: selectedChoices.map(e => e.id)
    });
  }

  poll = async () => {
    if (!this.keepPolling) {
      console.log('no longer polling');
      return;
    }

    console.log("polling");

    const restaurantsResult = await getChoices();
    const friendsResult = await getUsers();
    this.setState({
      restaurants: restaurantsResult,
      friends: friendsResult
    });

    setTimeout(() => this.poll(), 2500);
  };

  componentDidMount() {
    this.poll();
  }

  componentWillUnmount() {
    this.keepPolling = false;
  }

  render() {
    switch (this.state.action) {
      case 1:
        // TODO API call for Restaurants
        return (
          <BuildMotionCreationPage
            type="Restaurants"
            items={this.state.restaurants}
            selectedItems={this.state.selectedRestaurants}
            selectedItemIDs={this.state.selectedRestaurantIDs}
            setSelectedItems={this.handleRestaurants}
            handleClick={this.handleClick}
          />
        );

      case 2:
        // TODO API Call for Friends
        return (
          <BuildMotionCreationPage
            type="Friends"
            items={this.state.friends}
            selectedItems={this.state.selectedFriends}
            selectedItemIDs={this.state.selectedFriendIDs}
            setSelectedItems={this.handleFriends}
            handleClick={this.handleClick}
          />
        );
  
      case 3:
        return (
          <BuildCheckoutPage
            selectedFriends={this.state.selectedFriends}
            selectedRestaurants={this.state.selectedRestaurants}
          ></BuildCheckoutPage>
        );
    }
  }
}


function MotionCreationPage2() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurantIDs, setSelectedRestaurantIDs] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedFriendIDs, setSelectedFriendIDs] = useState([]);
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

  function handleRestaurants(selectedChoices) {
    setSelectedRestaurants(selectedChoices);
    setSelectedRestaurantIDs(selectedChoices.map((el) => el.id));
  }

  function handleFriends(selectedChoices) {
    setSelectedFriends(selectedChoices);
    setSelectedFriendIDs(selectedChoices.map((el) => el.id));
  }

  useEffect(() => {
    let mounted = true;

    const poll = async () => {
      if (!mounted) {
        console.log('no longer polling');
        return;
      }

      console.log("polling");

      const restaurantsResult = await getChoices();
      const friendsResult = await getUsers();
      setRestaurants(restaurantsResult);
      setFriends(friendsResult);
      setTimeout(() => poll(), 2500);
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
}
