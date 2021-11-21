import React, { useState } from 'react';

import "./sidebar.css"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem';
import {sideBarData} from './data.js'
const Sidebar = (props) => {
    const open = props.open
    const [activeItem, setActiveItem] = useState(0)

    return (
        <div className="sidebar" style={{marginLeft: open ? "0" : "-300px", transition: "margin-left 0.5s ease-in-out"}}>
            <div className="sidebar__logo">
                <img src={logo} alt="" />
            </div>
            {
                sideBarData.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            icon={item.icon}
                            title={item.display_name}
                            itemId={index}
                            route={item.route}
                            active={index === activeItem}
                            onclick= {(id)=> {setActiveItem(id)}}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
