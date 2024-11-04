const About = () => {
  return (
    <section className="px-6 py-16 text-gray-800 bg-gray-100 md:px-12">
      <div className="container max-w-3xl mx-auto">
        <h2 className="mb-6 text-4xl font-bold">Sobre Mí</h2>

        <p className="mb-6">
          ¡Hola! Soy [Tu Nombre], un desarrollador web apasionado por la
          tecnología y el arte de resolver problemas. Desde que creé mi primer
          sitio web, supe que este mundo sería mi camino. La combinación entre
          creatividad y lógica en el desarrollo web me atrapó desde el primer
          momento, y hoy estoy aquí, creando experiencias digitales que buscan
          ser tanto funcionales como atractivas.
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          ¿Por qué me dedico al desarrollo web?
        </h3>
        <p className="mb-6">
          Para mí, el desarrollo web es mucho más que escribir líneas de código;
          es una oportunidad para dar vida a ideas innovadoras y conectar con
          personas en todo el mundo. Cada proyecto es como un rompecabezas que
          exige creatividad y precisión para resolverlo de manera única. Me
          encanta aprender y mejorar mis habilidades, y disfruto explorar nuevas
          herramientas y tecnologías que me permitan llevar cada proyecto al
          siguiente nivel.
        </p>

        <h3 className="mb-4 text-2xl font-semibold">Mis habilidades</h3>
        <p className="mb-6">
          A lo largo de los años, he desarrollado una variedad de habilidades
          que me permiten abordar proyectos de todos los tamaños. Desde el
          diseño de interfaces de usuario atractivas con{" "}
          <strong>HTML, CSS y JavaScript</strong>, hasta la creación de
          aplicaciones dinámicas y eficientes con <strong>React</strong> y{" "}
          <strong>Node.js</strong>. También tengo experiencia en bases de datos
          como <strong>MongoDB</strong> y <strong>PostgreSQL</strong>, y siempre
          estoy explorando nuevas herramientas para mejorar mi flujo de trabajo.
        </p>

        <h3 className="mb-4 text-2xl font-semibold">¿Qué me motiva?</h3>
        <p className="mb-6">
          Me impulsa la curiosidad y el deseo constante de crecer. Soy una
          persona que se siente cómoda fuera de su zona de confort, porque creo
          que es ahí donde ocurre el verdadero aprendizaje. Me encanta colaborar
          con equipos diversos y aprender de otros profesionales, ya que cada
          interacción me permite ver nuevas perspectivas y enriquecer mi propio
          enfoque.
        </p>

        <h3 className="mb-4 text-2xl font-semibold">Fuera del código...</h3>
        <p className="mb-6">
          Cuando no estoy escribiendo código, puedes encontrarme leyendo sobre
          ciencia ficción, explorando las últimas tendencias en tecnología, o
          tal vez en algún sendero de montaña disfrutando de la naturaleza. Creo
          firmemente en el equilibrio entre la vida laboral y personal, y en la
          importancia de dedicar tiempo a las cosas que nos apasionan.
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          ¿Listo para trabajar juntos?
        </h3>
        <p>
          Si estás buscando a alguien con un enfoque creativo, habilidades
          técnicas sólidas y un compromiso inquebrantable con la calidad, ¡me
          encantaría hablar contigo! Puedes ver algunos de mis proyectos en la
          sección de{" "}
          <a href="#projects" className="text-blue-600 hover:underline">
            Proyectos
          </a>
          , o{" "}
          <a href="#contact" className="text-blue-600 hover:underline">
            ponerte en contacto conmigo
          </a>{" "}
          para discutir cómo podemos colaborar en tu próximo proyecto.
        </p>
      </div>
    </section>
  );
};

export default About;
