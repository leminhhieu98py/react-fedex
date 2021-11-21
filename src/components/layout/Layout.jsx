import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "./layout.css";
import Content from "../content/Content";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='layout'>
          <IconButton
            onClick={handleToggle}
            style={{
              position: "absolute",
              transitionTimingFunction: "linear",
              transition: "margin-left 0.55s, background-color 0.55s, color 0.55s, border-top-left-radius 0.55s, border-bottom-left-radius 0.55s",
              zIndex: "2",
              marginTop: "10px",
              marginLeft: open ? "240px" : "0",
              backgroundColor: open ? "#fff" : "#43a5ff",
              color: open ? "#0000008a" : "#fff",
              borderTopLeftRadius: open ? "50%" : "0",
              borderBottomLeftRadius: open ? "50%" : "0",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Sidebar open={open} />
          <Content open={open} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Layout;
