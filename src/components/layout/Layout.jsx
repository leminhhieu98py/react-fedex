import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import DeclarationFee from '../../pages/DeclarationFee'
import DeclarationInfo from '../../pages/DeclarationInfo'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./layout.css"

const Layout = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className="layout">
                    <Sidebar />
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routes>
                                <Route path="/customsDeclarationFee" element={<DeclarationFee />} />
                                <Route path="/customsDeclarationInfo" element={<DeclarationInfo />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </React.Fragment>
        
    )
}

export default Layout
