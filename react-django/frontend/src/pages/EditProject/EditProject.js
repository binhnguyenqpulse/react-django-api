import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from '../../component/Navbar/NavBar';
import Sidebar from '../../component/Sidebar/Sidebar';
import './EditProject.css'; // Create this CSS file or use an existing one

function EditProject() {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    // Fetch the project details using the project ID
    axios.get(`http://localhost:8000/Project/${id}/`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setStatusMessage('Error fetching project details. Please try again.');
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the project using the ID
    axios.put(`http://localhost:8000/Project/${id}/`, project)
      .then(() => {
        setStatusMessage('Project updated successfully!');
        navigate('/projectlist'); // Redirect to the projects list
      })
      .catch((error) => {
        console.error('There was an error updating the project!', error);
        setStatusMessage('Error updating project. Please try again.');
      });
  };

  if (!project) return <div>Loading...</div>; // Loading state

  return (
    <div className="container1">
      <NavBar />
      <div className="container2">
        <div className="container21">
          <Sidebar />
        </div>
        <div className="container22">
          <div className="main-content">
            <div className="edit-project-container">
              <h2>Edit Project</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    type="text"
                    name="project_name"
                    value={project.project_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Add other fields similarly */}
                <button type="submit">Update Project</button>
              </form>

              {statusMessage && (
                <div className={`status-message ${statusMessage.includes('Error') ? 'error' : 'success'}`}>
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
