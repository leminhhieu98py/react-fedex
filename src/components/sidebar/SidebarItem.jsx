import React from 'react';

const SidebarItem = props => {
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner`}>
                {props.icon}
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default SidebarItem