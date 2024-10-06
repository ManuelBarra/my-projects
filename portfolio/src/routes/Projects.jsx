import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error al cargar los proyectos:', error));
  }, []);

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} width="150" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
