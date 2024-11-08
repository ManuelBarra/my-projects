import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import EditProject from "./components/EditProject";

const App = () => {
  
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Header visible en todas las páginas */}
          <main className="flex-grow">
            <Routes>
              {/* Ruta públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/login" element={<Login />} />

              {/* Rutas privadas */}
              <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects/:projectId/edit" element={<EditProject />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
