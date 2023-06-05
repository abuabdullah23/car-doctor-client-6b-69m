import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    // for redirect after login: step 1
    const location = useLocation();

    // These are fixed for after loading value 0 in booking cart route; booking cart route is a private route
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center py-10'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;