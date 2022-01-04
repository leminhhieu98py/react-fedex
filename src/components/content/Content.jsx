import React from "react";
import routes from "../../routes.jsx";
import { Routes, Route } from "react-router";

const Content = (props) => {
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
        <div
            className='layout__content'
            style={{
                paddingLeft: props.open ? "300px" : "30px",
                transition: "padding-left 0.5s ease-in-out",
            }}
        >
            <div className='layout__content-main'>
                <div className='content__wrapper'>{showContent(routes)}</div>
            </div>
        </div>
    );
};

export default Content;
