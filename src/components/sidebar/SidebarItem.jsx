import React from 'react';

const SidebarItem = props => {
    let active = props.active ?? ''
    if(props.route === window.location.pathname)
        active = 'active'

    return (
        <div onClick={() => {props.onclick(props.itemId)}} className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                {props.icon}
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default SidebarItem