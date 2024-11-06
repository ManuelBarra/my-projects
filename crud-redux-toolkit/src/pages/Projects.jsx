import { useEffect, useState } from 'react';
import { getProjects, createProject, deleteProject } from '../services/projectService';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => setProjects(data));
  }, []);

  /* const handleCreateProject = async (newProject) => {
    const createdProject = await createProject(newProject);
    setProjects([...projects, createdProject]);
  }; */

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name}
            <button onClick={() => deleteProject(project)}>Eliminar</button>
          </li>
        ))}
      </ul> 
      <form>
        <input type="text" placeholder="Nombre del proyecto" />
        <input type="text" placeholder="Descripción del proyecto" />
        <input type="text" placeholder="Link del proyecto" />
        <button onClick={() => createProject()}>Crear</button>
      </form>
    </div>
  );
};

export default Projects;
