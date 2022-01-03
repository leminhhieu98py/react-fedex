import React from "react";
import DeclarationFee from './pages/DeclarationFee/DeclarationFee'
import DeclarationInfo from './pages/DeclarationInfo/DeclarationInfo'
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
        path: "*",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;