import ProjectList from '../components/ProjectList';

const Projects = () => {
    return (
        <div className="container p-8 mx-auto">
            <h1 className="text-3xl font-bold text-center">Mis Proyectos</h1>
            <p className="mt-4 text-center">
                Aquí encontrarás una selección de algunos de mis proyectos destacados.
            </p>
            <ProjectList />
        </div>
    );
};

export default Projects;