import '../styles/CreateProject.css';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import CreateProjectForm from '../components/CreateProjectForm';

const CreateProject = () => {
  return (

    <div className="container1">
    <NavBar/>
    <div className="container2">
        <div className="container21"><Sidebar/></div>
          <div className="container22">
          <div className="main-content">
          <CreateProjectForm/>
        </div>
    </div>
    </div>
    </div>
  );
};

export default CreateProject;
