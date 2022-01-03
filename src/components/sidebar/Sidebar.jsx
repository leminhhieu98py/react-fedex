import React from 'react'


import "./sidebar.css"
import SidebarBottom from './SidebarBottom'
import SidebarTop from './SidebarTop'

const Sidebar = (props) => {
    const open = props.open

    return (
        <div className="sidebar" style={{marginLeft: open ? "0" : "-300px", transition: "margin-left 0.5s ease-in-out"}}>
            <div className="sidebar_inner">
                {/* sidebar top */}
                <SidebarTop />

                {/* sidebar bottom */}
                <SidebarBottom handleLogout={props.handleLogout} />
            </div>
        </div>
    )
}

export default Sidebar
