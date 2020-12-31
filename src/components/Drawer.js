import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const DrawerData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoIosLogIn />,
    cName: "nav-text",
  },
  {
    title: "MotionCreation",
    path: "motion-creation",
    icon: <AiIcons.AiFillPlusCircle />,
    cName: "nav-text",
  },
];
