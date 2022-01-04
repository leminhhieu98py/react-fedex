import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { sideBarData } from "./data.js";

const SidebarTop = () => {

  return (
    <div className='sidebar__inner-top'>
      <div className='sidebar__logo'>
        <img src={logo} alt='feDex-logo' />
      </div>
      <hr />
      {sideBarData.map((item, index) => (
        <NavLink
          to={item.route}
          key={index}
          className={`nav-link ${(navData) => navData.isActive ? 'active' : ''}`}
        >
          <SidebarItem
            icon={item.icon}
            title={item.display_name}
            itemId={index}
            route={item.route}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarTop;
