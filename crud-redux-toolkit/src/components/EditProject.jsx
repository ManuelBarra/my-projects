// src/pages/EditProject.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProject } from '../features/projectsSlice';  // Acción para actualizar el proyecto

const EditProject = () => {
  const { projectId } = useParams(); // Obtener el ID del proyecto desde la URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Obtener el proyecto por ID desde el estado global
  const project = useSelector(state =>
    state.projects.find((p) => p.id === parseInt(projectId))
  );

  // Usamos un estado para manejar la carga del proyecto
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (project) {
      // Si el proyecto existe, prellenamos el estado con los datos actuales
      setName(project.name);
      setDescription(project.description);
      setTechnologies(project.technologies);
      setImage(project.image);
    }
  }, [project]); // Solo se ejecuta cuando `project` cambia

  // Si no se encuentra el proyecto, mostramos un mensaje de error
  if (!project) {
    return <div>Proyecto no encontrado.</div>;
  }

  // Manejar el envío del formulario para actualizar el proyecto
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProject = {
      id: project.id,
      name,
      description,
      technologies,
      image,
    };

    // Despachar la acción para actualizar el proyecto
    dispatch(updateProject(updatedProject));

    // Redirigir a la página de detalles del proyecto después de editarlo
    navigate(`/projects/${project.id}`);
  };

  return (
    <div>
      <h1>Editar Proyecto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre del Proyecto
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
            Tecnologías
          </label>
          <input
            type="text"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            URL de la Imagen
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Actualizar Proyecto
        </button>
      </form>
    </div>
  );
};

export default EditProject;
