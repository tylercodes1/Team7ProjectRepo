import db from "./dummydb";
import Axios from "axios";

let currentUser = {
  id: 4,
  name: "Tyler",
  password: "password1",
  isAdmin: false,
};

export async function hello() {
  const result = await Axios.get("http://localhost:8081/hello");
  console.log(result);
}

//Users
export async function Login(username, password) {
  for (let i = 0; i < db.users.length; i++) {
    const u = db.users[i];
    if (u.name === username && u.password === password) {
      currentUser = u;
      return;
    }
  }

  throw new Error("User not found  or password incorrect");
}

export async function getUsers() {
  return db.users;
}

export async function getUserByName(name) {
  for (let i = 0; i < db.users.length; i++) {
    const u = db.users[i];
    if (u.name === name) {
      return u;
    }
  }

  throw new Error("User not found");
}

export async function getUserById(id) {
  for (let i = 0; i < db.users.length; i++) {
    const u = db.users[i];
    if (u.id === id) {
      return u;
    }
  }

  throw new Error("User not found");
}

export async function addUser(userDTO) {
  for (let i = 0; i < db.users.length; i++) {
    const u = db.users[i];

    if (u.name === userDTO.name) {
      return new Error("User already exist");
    }
  }

  const userToAdd = {
    ...userDTO,
    id: ++db.lastUserID,
    isAdmin: false,
  };

  db.users.push(userToAdd);
  return userToAdd;
}

// addUser({name: 'georgia', password: 'ok'}).then(u => {
//     console.log('added ' + JSON.stringify(u));
//     console.log(JSON.stringify(db.users, null, 2));
// });

//Motions:
// export async function getMotions() {
//   if (!currentUser) {
//     return [];
//   }
//   return db.motions.filter((m) => m.owner_id === currentUser.id);
// }

export async function getMotions(){
  const resp = await Axios.get('http://localhost:5000/motions' , {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
return resp.data;
}
//console.log(JSON.stringify(getMotions()));

export async function addMotion(motionDTO) {
  // if (!currentUser) {
  //   return;
  // }
  const motionToAdd = {
    ...motionDTO,
    id: ++db.lastMotionID,
    owner_id: currentUser.id,
  };
  db.motions.push(motionToAdd);
  return motionToAdd;
}

export async function addMotionUser(motionUser) {
  const motionUserToAdd = {
    ...motionUser,
    motion_user_id: ++db.lastMotionID,
    vote_id: -1,
  };
  db.motion_user.push(motionUserToAdd);
  return motionUserToAdd;
}

export async function addMotionChoice(motionChoice) {
  const motionChoiceToAdd = {
    ...motionChoice,
    motion_choice_id: ++db.lastMotionChoiceID,
  };
  db.motion_user.push(motionChoiceToAdd);
  return motionChoiceToAdd;
}

export async function getChoices() {
  const resp = await Axios.get('http://localhost:5000/choices' , {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
  return resp.data;
}

export async function getMotionChoices() {
  return db.motionChoices;
}

// setTimeout(() => {
//   addMotion({ title: "hello" }).then((m) => {
//     console.log(JSON.stringify(db.motions, null, 2));
//   });
// }, 20000);

// console.log('running axiossssssssss')
// Axios.get('http://localhost:5000/hello' , {
//   headers: {
//     "Authorization": `Bearer ${localStorage.getItem("token")}`
//   }
// }).then(r => {
//   console.log(r.data);
// })



// setInterval(() => {
//   Axios.get('http://localhost:5000/choices' , {
//   headers: {
//     "Authorization": `Bearer ${localStorage.getItem("token")}`
//   }
// }).then(r => {
//   console.log(r.data);
// })
// }, 5000)