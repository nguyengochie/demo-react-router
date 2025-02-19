import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateHome = () => {
    const isAuth = false;
    return (
        <div>
            <h1>Private Home</h1>
            {isAuth ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateHome