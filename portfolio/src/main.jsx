import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import ProjectDetail from './routes/ProjectDetail'
import RootLayout from './components/RootLayout'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // RootLayout incluye el Header y la estructura general
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:id', element: <ProjectDetail /> } // Ruta dinámica para detalles del proyecto
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
