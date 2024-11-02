import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Header visible en todas las páginas */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
