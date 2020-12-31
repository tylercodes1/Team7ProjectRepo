export default {
  users: [
    {
      id: 1,
      name: "Macy",
      password: "password1",
      isAdmin: false,
    },
    {
      id: 2,
      name: "John Doe",
      password: "password2",
      isAdmin: false,
    },
    {
      id: 3,
      name: "Fella",
      password: "password3",
      isAdmin: false,
    },
    {
      id: 4,
      name: "Tyler",
      password: "password1",
      isAdmin: false,
    },
    {
      id: 5,
      name: "Eric",
      password: "password2",
      isAdmin: false,
    },
    {
      id: 6,
      name: "Tian",
      password: "password3",
      isAdmin: false,
    },
    {
      id: 7,
      name: "Karl",
      password: "password3",
      isAdmin: false,
    },
  ],
  lastUserID: 3,

  motions: [
    {
      id: 1,
      title: "motion1",
      owner_id: 1,
    },
    {
      id: 2,
      title: "motion2",
      owner_id: 1,
    },
  ],
  lastMotionID: 2,

  choices: [
    {
      id: 9,
      name: "Panda Express",
      owner_id: 2,
    },
    {
      id: 10,
      name: "Dairy Queen",
      owner_id: 2,
    },
    {
      id: 11,
      name: "Olive Garden",
      owner_id: 3,
    },
    {
      id: 13,
      name: "Chic-fil-a",
      owner_id: 6,
    },
    {
      id: 14,
      name: "Burger King",
      owner_id: 2,
    },
    {
      id: 15,
      name: "McDonalds",
      owner_id: 2,
    },
    {
      id: 16,
      name: "Jimmy Johns",
      owner_id: 3,
    },
    {
      id: 17,
      name: "PizzaHut",
      owner_id: 6,
    },
  ],
  motionChoices: [
    {
      id: 9,
      name: "Panda Express",
      owner_id: 2,
    },
    {
      id: 10,
      name: "Dairy Queen",
      owner_id: 2,
    },
    {
      id: 11,
      name: "Olive Garden",
      owner_id: 3,
    },
    {
      id: 13,
      name: "Chic-fil-a",
      owner_id: 6,
    },
  ],

  motion_user: [
    {
      motion_user_id: 1,
      motion_id: 1,
      user_id: 3,
      vote_id: 4,
    },
    {
      motion_user_id: 2,
      motion_id: 1,
      user_id: 1,
      vote_id: 4,
    },
    {
      motion_user_id: 3,
      motion_id: 1,
      user_id: 2,
      vote_id: 4,
    },
    {
      motion_user_id: 4,
      motion_id: 1,
      user_id: 4,
      vote_id: 4,
    },
  ],
  lastMotionUserID: 4,

  motion_choice: [
    { motion_choice_id: 1, motion_id: 1, choice_id: 2 },
    { motion_choice_id: 2, motion_id: 1, choice_id: 4 },
    { motion_choice_id: 3, motion_id: 1, choice_id: 6 },
    { motion_choice_id: 4, motion_id: 1, choice_id: 8 },
  ],
  lastMotionChoiceID: 4,
};
