import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const DrawerData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Motion',
        path: '/motion',
        icon: <GiIcons.GiVote />,
        cName: 'nav-text'
    },
    {
        title: 'ReduxExample',
        path: '/reduxTest',
        icon: <GiIcons.GiTestTubes />,
        cName: 'nav-text'
    },
    {
      title: "MotionCreation",
      path: "motion-creation",
      icon: <AiIcons.AiFillPlusCircle />,
      cName: "nav-text",
    },
]
