import React, {useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import "./layout.css";
import Content from "../content/Content";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {
  const [open, setOpen] = useState(true)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='layout'>
          <IconButton 
            onClick={handleToggle} 
            style={{position: "relative", transitionDuration: "1s", zIndex: "2", marginTop: "10px", marginLeft: open ? '250px' : '10px'}}>
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
