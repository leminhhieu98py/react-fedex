import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";
import Content from "../content/Content";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
  },
});

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
          <div className='layout'>
            <IconButton
              onClick={handleToggle}
              style={{
                position: "absolute",
                transitionTimingFunction: "linear",
                transition: "margin-left 0.55s, background-color 0.55s, color 0.55s, border-top-left-radius 0.55s, border-bottom-left-radius 0.55s",
                zIndex: "2",
                marginTop: "20px",
                marginLeft: open ? "250px" : "0",
                backgroundColor: open ? "#fff" : "#7733ff",
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
      </ThemeProvider>
      {/* </BrowserRouter> */}
    </React.Fragment>
  );
};

export default Layout;
