import React from 'react'
import routes from "../../routes.jsx";
import { Routes, Route } from "react-router-dom";


const Content = () => {
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
        <div className='layout__content'>
            <div className='layout__content-main'>
            {showContent(routes)}
            </div>
        </div>
    )
}

export default Content
