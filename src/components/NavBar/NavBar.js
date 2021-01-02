import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { DrawerData } from "../Drawer";
import "./NavBar.css";

function NavBar({ onNavBarClick }) {
  const [drawer, setDrawer] = useState(false);
  const showDrawer = () => setDrawer(!drawer);

  function handleLogout() {
    localStorage.clear();
  }

  return (
    <>
      <div className="navbar">
        <NavLink to="#" className="menu-bars" onClick={onNavBarClick}>
          <FaIcons.FaBars onClick={showDrawer} />
        </NavLink>
      </div>
      <nav
        className={drawer ? "nav-menu active" : "nav-menu"}
        onClick={onNavBarClick}
      >
        <ul className="nav-menu-items" onClick={showDrawer}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </NavLink>
          </li>
          {localStorage.getItem("token") !== null &&
            DrawerData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    to={item.path}
                    onClick={() => {
                      console.log(item.title);
                      if (item.title === "Logout") {
                        handleLogout();
                      }
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
