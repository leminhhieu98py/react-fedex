import React from "react";
import DeclarationFee from './pages/DeclarationFee/DeclarationFee'
import DeclarationInfo from './pages/DeclarationInfo/DeclarationInfo'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

const routes = [
    {
        path: "/customsDeclarationFee",
        exact: true,
        main: () => <DeclarationFee />
    },
    {
        path: "/customsDeclarationInfo",
        exact: true,
        main: () => <DeclarationInfo />
    },
    {
        path: "/login",
        exact: true,
        main: () => <Login />
    },
    {
        path: "/logout",
        exact: true,
        main: () => <Login />
    },
    {
        path: "*",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;