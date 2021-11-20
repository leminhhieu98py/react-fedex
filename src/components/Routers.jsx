import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customer from '../pages/Customer'


const Routers = () => {
    return (
        <React.Fragment>
            <Route path="/" element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
        </React.Fragment>
    )
}


export default Routers
