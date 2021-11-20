import React from "react";
import Sidebar from "../sidebar/Sidebar";
import routes from "../../routes.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  let showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={route.main()}
          />
        );
      });
    }

    return <Routes>{result}</Routes>;
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='layout'>
          <Sidebar />
          <div className='layout__content'>
            <div className='layout__content-main'>
              {showContent(routes)}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Layout;
