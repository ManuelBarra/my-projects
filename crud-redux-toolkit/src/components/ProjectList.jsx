import { useSelector, useDispatch } from 'react-redux';
import { deleteProject } from '../features/projectsSlice';

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => dispatch(deleteProject(project.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
