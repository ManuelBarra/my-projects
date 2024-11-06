import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HomeIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex items-center justify-between p-4 text-white bg-blue-600">
            <div className='container flex items-center justify-between mx-auto text-white bg-blue-600'>
                {/* Logo */}
                <NavLink to="/" className="flex items-center text-lg font-bold">
                    <HomeIcon className="w-6 h-6 mr-2 text-white" />
                    Mi Portafolio
                </NavLink>

                {/* Icono de menú para dispositivos móviles */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? (
                            <XIcon className="w-6 h-6 text-white" />
                        ) : (
                            <MenuIcon className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Menú de navegación */}
                <nav
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
                >
                    <NavLink to="/" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                        Contact
                    </NavLink>
                    {isAuthenticated ? (
                        <>
                            <NavLink to="/dashboard" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                                Dashboard
                            </NavLink>
                            <button onClick={logout} className="block px-2 py-1 mt-2 text-white bg-red-600 rounded md:mt-0 md:inline-block">
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/login" className="block py-2 text-white md:inline-block" onClick={() => setMenuOpen(false)}>
                            Login
                        </NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;