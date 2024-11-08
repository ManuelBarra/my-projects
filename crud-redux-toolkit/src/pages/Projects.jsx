
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = useSelector((state) => state.projects); // Estado global de proyectos

  return (
    <div>
      <h1>Proyectos</h1>
      <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
            <p>{project.description}</p>
            <p>{project.technologies}</p> 
            <img src={project.image} alt='imagen' />  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
