import AddProject from "../components/AddPRoject";
import ProjectList from "../components/ProjectList";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Bienvenido al Dashboard</h1>
      <AddProject />
      <ProjectList />
    </div>
  );
};

export default Dashboard;
