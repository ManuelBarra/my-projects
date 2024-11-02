
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <nav className="container mx-auto flex justify-around">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-400" : "text-white"
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-400" : "text-white"
                    }
                >
                    About
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-400" : "text-white"
                    }
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                        isActive ? "text-yellow-400" : "text-white"
                    }
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;