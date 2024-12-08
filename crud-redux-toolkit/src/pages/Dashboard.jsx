import AddProject from "../components/AddPRoject";
import ProjectList from "../components/ProjectList"

const Dashboard = () => {
  return (
      <div className="flex ">
        <div className="aside-container">
          <h1>Dashboard</h1>
          <div className="aside-content">
            <div className="aside-item">
              <h2>Perfil</h2>
              <p>Name</p>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="proyect-list">
            <ProjectList />
          </div>
          <div className="add-project">
            <h2>Agregar Proyecto</h2>   
            <AddProject />  
          </div>
        </div>

          
         
      </div>
    )};

export default Dashboard  