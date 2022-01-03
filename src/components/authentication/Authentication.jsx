import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../login/Login";
import ForgetPassword from "../forgetPassword/ForgetPassword";
import { purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[300],
        },
    },
});

const Authentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {isLoggedIn ? (
                        <Route
                            path='*'
                            element={
                                <Layout
                                    handleLogout={() => setIsLoggedIn(false)}
                                />
                            }
                        />
                    ) : (
                        <React.Fragment>
                            <Route
                                path='*'
                                element={<Navigate to='/login' />}
                            />
                            <Route
                                path='/login'
                                element={
                                    <Login
                                        handleLogin={() => setIsLoggedIn(true)}
                                    />
                                }
                            />
                            <Route
                                path='/forgetpassword'
                                element={<ForgetPassword />}
                            />
                        </React.Fragment>
                    )}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default Authentication;
