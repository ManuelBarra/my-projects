/* eslint-disable react/prop-types */


import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);

    // Si el usuario no está autenticado, redirige al login
    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;