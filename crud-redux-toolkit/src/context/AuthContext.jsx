/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Crea el contexto
const AuthContext = createContext();

// Proveedor de contexto para manejar autenticación
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Función para iniciar sesión
    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard'); // Redirige al Dashboard después de iniciar sesión
    };

    // Función para cerrar sesión
    const logout = () => {
        setIsAuthenticated(false);
        navigate('/login'); // Redirige a Login después de cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook para usar el contexto de autenticación
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};