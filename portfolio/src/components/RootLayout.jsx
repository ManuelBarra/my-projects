import { Outlet, NavLink } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink> {/* 'end' asegura que coincida exactamente con la ruta */}
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Outlet para renderizar los elementos hijos de RootLayout */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
