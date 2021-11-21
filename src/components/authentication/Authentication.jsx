import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../login/Login';
import PrivateRoute from "./PrivateRoute";

const Authentication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route to="/login" element={<Login />} />
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/' element={<Layout/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Authentication
