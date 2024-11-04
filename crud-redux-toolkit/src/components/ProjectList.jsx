

import { useSelector } from 'react-redux';
/* import { deleteProject } from '../features/projectsSlice'; */

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  /* const dispatch = useDispatch(); */ /* Importar dispatch */

  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            <p>{project.github}</p>
            <img src={project.image} alt='imagen' />
            {project.name}
            {project.description}
            {project.technologies}
            {project.github}
            {project.image}
           {/*  <button onClick={() => dispatch(deleteProject(project.id))}>Eliminar</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default ProjectList;
