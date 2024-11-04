

import { useSelector } from 'react-redux';
/* import { deleteProject } from '../features/projectsSlice'; */

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  /* const dispatch = useDispatch(); */ /* Importar dispatch */

  return (
    <div>
      <h2>Proyectos</h2>
      <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <li className='p-6 bg-white rounded-lg shadow-lg' key={project.id}>
            <h2 className='text-2xl font-semibold'>{project.name}</h2>
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
