import React from "react";
import DeclarationFee from './pages/DeclarationFee/DeclarationFee'
import DeclarationInfo from './pages/DeclarationInfo/DeclarationInfo'
import NotFound from './pages/NotFound/NotFound'
import Default from './pages/Default/Default'
import Profile from './pages/Profile/Profile'

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
        main: () => <Default />
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />
    },
    {
        path: "*",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;