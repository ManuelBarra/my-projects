
import ProjectList from '../components/ProjectList';
import AddProject from '../components/AddPRoject';


const Home = () => {
  return (
      <div className="container mx-auto p-8 space-y-16">

          {/* Hero Section */}
          <section className="text-center py-16 bg-blue-600 text-white rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">Hola, soy [Tu Nombre]</h1>
              <p className="mt-4 text-lg">Desarrollador web apasionado por crear experiencias digitales únicas.</p>
              <button className="mt-8 px-6 py-2 bg-yellow-400 text-blue-600 font-semibold rounded hover:bg-yellow-500">
                  Ver Mis Proyectos
              </button>
          </section>

          {/* About Me Section */}
          <section className="space-y-4">
              <h2 className="text-3xl font-bold text-center text-blue-600">Sobre Mí</h2>
              <p className="text-center text-gray-700">
                  Soy un desarrollador web con experiencia en creación de aplicaciones web modernas y escalables. Me apasiona la tecnología y el aprendizaje constante, y disfruto mucho trabajar en proyectos que me desafían y me permiten crecer.
              </p>
              <p className="text-center text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra, magna vel congue consequat, nulla leo convallis elit, in efficitur magna eros non nulla.
              </p>
              <AddProject />
              <ProjectList />
          </section>


          {/* Featured Projects Section */}
          <section className="space-y-4">
              <h2 className="text-3xl font-bold text-center text-blue-600">Proyectos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold">Proyecto 1</h3>
                      <p className="mt-2 text-gray-600">
                          Descripción breve del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold">Proyecto 2</h3>
                      <p className="mt-2 text-gray-600">
                          Descripción breve del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold">Proyecto 3</h3>
                      <p className="mt-2 text-gray-600">
                          Descripción breve del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                  </div>
              </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-4">
              <h2 className="text-3xl font-bold text-center text-blue-600">Habilidades</h2>
              <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">JavaScript</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">React</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">Node.js</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">HTML & CSS</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">MongoDB</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded">Tailwind CSS</span>
              </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-16 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-600">Contacto</h2>
              <p className="mt-4 text-gray-700">¿Te gustaría trabajar conmigo o tienes alguna pregunta? ¡No dudes en contactarme!</p>
              <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                  Contáctame
              </button>
          </section>
      </div>
  );
};

export default Home;