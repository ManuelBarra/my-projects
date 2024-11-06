import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HomeIcon } from '@heroicons/react/outline';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className="flex items-center justify-between p-4 text-white bg-blue-600">
            <NavLink to="/" className="text-lg font-bold">
            <HomeIcon className="w-6 h-6 text-blue-500" />Mi Portafolio</NavLink>
            <nav className="space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuthenticated ? (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <button onClick={logout} className="px-2 py-1 ml-4 bg-red-600 rounded">Logout</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
                <DarkModeToggle />
            </nav>
        </header>
    );
};

export default Header;
