import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../features/projectsSlice';

const AddProject = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén completos
    if (projectName.trim() && description.trim() && technologies.trim() && image.trim()) {
      dispatch(addProject({
        id: Date.now(),
        name: projectName,
        description,
        technologies: technologies.split(',').map(tech => tech.trim()),
        image
      }));
      
      // Limpiar los campos después de agregar el proyecto
      setProjectName('');
      setDescription('');
      setTechnologies('');
      setImage('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Nombre del Proyecto</label>
        <input
          id="projectName"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Nombre del Proyecto"
          required
        />
      </div>
      
      <div>
        <label htmlFor="description">Descripción del Proyecto</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción del Proyecto"
          required
        />
      </div>
      
      <div>
        <label htmlFor="technologies">Tecnologías (separadas por coma)</label>
        <input
          id="technologies"
          type="text"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="Tecnologías (separadas por coma)"
          required
        />
      </div>
      
      <div>
        <label htmlFor="image">URL de la Imagen</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL de la Imagen"
          required
        />
      </div>
      
      <button type="submit">Agregar Proyecto</button>
    </form>
  );
};

export default AddProject;
