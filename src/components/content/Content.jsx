import React from 'react'
import routes from "../../routes.jsx";
import { Routes, Route } from "react-router-dom";


const Content = (props) => {
    const open = props.open
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
        <div className='layout__content' style={{paddingLeft: open ? "300px" : "30px", transition: "padding-left 0.5s ease-in-out"}}>
            <div className='layout__content-main'>
            {showContent(routes)}
            </div>
        </div>
    )
}

export default Content
