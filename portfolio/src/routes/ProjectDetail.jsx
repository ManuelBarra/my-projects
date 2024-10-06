import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams(); // Obtener el parámetro ID de la URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Cargar los datos del JSON para obtener el proyecto por ID
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const foundProject = data.find((p) => p.id === id);
        setProject(foundProject);
      })
      .catch((error) => console.error('Error al cargar el proyecto:', error));
  }, [id]);

  if (!project) {
    return <p>Cargando proyecto...</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} width="300" />
      <p>
        Ver más en: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
      </p>
    </div>
  );
};

export default ProjectDetail;