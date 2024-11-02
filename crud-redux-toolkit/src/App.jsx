
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects'; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />

   
      </Routes>
    </Router>
  );
};

export default App;


