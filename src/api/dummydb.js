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
      proposal: "Panda Express",
      owner_id: 2,
    },
    {
      id: 10,
      proposal: "Dairy Queen",
      owner_id: 2,
    },
    {
      id: 11,
      proposal: "Olive Garden",
      owner_id: 3,
    },
    {
      id: 13,
      proposal: "Chic-fil-a",
      owner_id: 6,
    },
    {
      id: 14,
      proposal: "Burger King",
      owner_id: 2,
    },
    {
      id: 15,
      proposal: "McDonalds",
      owner_id: 2,
    },
    {
      id: 16,
      proposal: "Jimmy Johns",
      owner_id: 3,
    },
    {
      id: 17,
      proposal: "PizzaHut",
      owner_id: 6,
    },
  ],
};
