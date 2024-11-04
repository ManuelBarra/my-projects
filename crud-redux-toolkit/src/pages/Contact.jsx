const Contact = () => {
    return (
        <section className="px-6 py-16 text-gray-800 bg-gray-100 md:px-12">
            <div className="container max-w-3xl mx-auto">
                <h2 className="mb-6 text-4xl font-bold text-center">Contáctame</h2>
                <p className="mb-12 text-lg text-center text-gray-600">
                    ¿Tienes un proyecto en mente o simplemente quieres saludar? Completa el formulario o envíame un mensaje a través de mis redes. ¡Estoy deseando saber de ti!
                </p>

                <form className="p-8 bg-white rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-lg font-semibold">Nombre</label>
                        <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Tu nombre completo" required />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-lg font-semibold">Correo Electrónico</label>
                        <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="tucorreo@ejemplo.com" required />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-lg font-semibold">Mensaje</label>
                        <textarea id="message" className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                    
                    <button type="submit" className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                        Enviar Mensaje
                    </button>
                </form>

                <div className="mt-12 text-center">
                    <p className="mb-4 text-lg">O también puedes escribirme a:</p>
                    <a href="mailto:tucorreo@ejemplo.com" className="text-blue-600 hover:underline">tucorreo@ejemplo.com</a>
                    <p className="mt-4 text-lg">Teléfono: <span className="text-gray-700">+1 (123) 456-7890</span></p>
                </div>


                <div className="flex justify-center mt-12 space-x-6">
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <img src="linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                        <img src="github-icon.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                        <img src="twitter-icon.svg" alt="Twitter" className="w-8 h-8" />
                    </a>
                
                </div>
            </div>
        </section>

    );
};  

export default Contact;