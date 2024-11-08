import { useSelector } from "react-redux";
import { deleteProject } from "../features/projectsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Proyectos</h2>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li className="p-6 bg-white rounded-lg shadow-lg" key={project.id}>
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            <img src={project.image} alt="imagen" />
            <button onClick={() => dispatch(deleteProject(project.id))}>
              Eliminar
            </button>
            <Link
              to={`/projects/${project.id}/edit`}
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Editar
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
