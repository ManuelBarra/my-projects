import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../features/projectsSlice';

const AddProject = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      dispatch(addProject({ id: Date.now(), name: projectName }));
      setProjectName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Nombre del Proyecto"
        required
      />
      <button type="submit">Agregar Proyecto</button>
    </form>
  );
};

export default AddProject;
