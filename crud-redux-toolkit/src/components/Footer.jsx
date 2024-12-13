const Footer = () => {
  return (
    <footer className="py-10 text-gray-300 bg-gray-900">
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
            <div>
                <h2 className="mb-4 text-xl font-semibold text-white">Contacto Hola</h2>
                <p>
                    <a href="mailto:tu-correo@ejemplo.com" className="hover:text-white">tu-correo@ejemplo.com</a>
                </p>
                <p>
                    <a href="tel:+56-123-456-789" className="hover:text-white">+56 (123) 456-789</a>
                </p>
            </div>
            
            <div>
                <h2 className="mb-4 text-xl font-semibold text-white">Enlaces Útiles</h2>
                <ul className="space-y-2">
                    <li><a href="#about" className="hover:text-white">Sobre mí</a></li>
                    <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
                    <li><a href="#contact" className="hover:text-white">Contacto</a></li>
                    <li><a href="#blog" className="hover:text-white">Blog</a></li>
                </ul>
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold text-white">Sígueme en</h2>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                            <img src="github-icon.svg" alt="GitHub" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                            <img src="twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="pt-4 mt-8 text-center border-t border-gray-700">
            <p>&copy; 2023 Tu Nombre. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;