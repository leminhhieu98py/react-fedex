import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){
    return(
        <div className="navbar-wrapper">
            <div className="navbar-logo-wrapper">
                <img src="https://www.fedexvietnam.net/wp-content/uploads/2020/11/chuyen-phat-nhanh-fedex.png" alt="" />
                <div id="navbar-toggle-btn">
                    <MenuIcon />
                </div>
            </div>
            <div className="avatar-wrapper">
                <img src="https://play-lh.googleusercontent.com/YtXTsa-6SaaMl02-OUo8iRztlX5Thu4aCLavunIV1M5hm9y4ySTPpMjpY44fL4ayz7Se" alt="" />
            </div>
        </div>
    )
}