import { createSlice } from '@reduxjs/toolkit';
import projectData from '../data/projects.json';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectData,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.findIndex(project => project.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProject: (state, action) => {
      return state.filter(project => project.id !== action.payload);
    },
    setProjects: (state, action) => {
      return action.payload;
    }
  }
});

export const { addProject, updateProject, deleteProject, setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;