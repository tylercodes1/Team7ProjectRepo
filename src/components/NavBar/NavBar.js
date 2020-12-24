import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {DrawerData} from '../Drawer'
import './NavBar.css';

function NavBar({onNavBarClick}) {
    const [drawer, setDrawer] = useState(false);
    const showDrawer = () => setDrawer(!drawer);
    return ( 
        <>
            <div className='navbar' >
                <NavLink to='#' className='menu-bars' onClick={onNavBarClick}>
                    <FaIcons.FaBars onClick = {showDrawer} />
                </NavLink>
            </div>
            <nav className = {drawer ? 'nav-menu active' : 'nav-menu'} onClick={onNavBarClick}>
                <ul className='nav-menu-items' onClick = {showDrawer}>
                    <li className= 'navbar-toggle'>
                        <NavLink to='#' className = 'menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </NavLink>
                    </li>
                    {DrawerData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink to= {item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar