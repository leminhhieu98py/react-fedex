import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { sideBarData } from "./data.js";

const SidebarTop = () => {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <div className='sidebar__inner-top'>
      <div className='sidebar__logo'>
        <img src={logo} alt='feDex-logo' />
      </div>
      <hr />
      {sideBarData.map((item, index) => (
        <Link
          to={item.route}
          key={index}
          onClick={() => {
            setPath(item.route);
          }}
        >
          <SidebarItem
            icon={item.icon}
            title={item.display_name}
            itemId={index}
            route={item.route}
            active={
              item.route === path
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default SidebarTop;
