import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams(); // Obtener el ID del proyecto de la URL
  const navigate = useNavigate();
  const project = useSelector((state) => state.projects.find((p) => p.id === parseInt(projectId)));

  if (!project) {
    return <div>Proyecto no encontrado.</div>;
  }

  const handleDelete = () => {
    // Aquí llamamos a la acción para eliminar el proyecto
    // dispatch(deleteProject(project.id));  // Necesitas tener acceso al dispatch si lo quieres hacer desde aquí
    navigate('/projects'); // Redirigir a la lista de proyectos después de eliminar
  };

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>
      <p><strong>URL de la Imagen:</strong> {project.image}</p>
      <p><strong>Fecha de Creación:</strong> {project.createdAt}</p>
      <button onClick={handleDelete}>Eliminar Proyecto</button>
    </div>
  );
};

export default ProjectDetail;