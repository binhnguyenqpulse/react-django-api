import React, { useState } from "react";
import Sidebar from '../../component/Sidebar/Sidebar';
import './CreateProject.css';
import NavBar from '../../component/Navbar/NavBar';

function CreateProject() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    scope: [],
    teamMembers: [],
    milestones: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddScope = () => {
    // Logic to add a new scope (like Scope 01, 02, etc.)
  };

  const handleAddMilestone = () => {
    // Logic to add a new milestone
  };

  const handleSubmit = () => {
    // Logic to submit the form data
    console.log(formData);
  };
  
  return (
    <div className="container1">
      <NavBar/>
      <div className="container2">
        <div className="container21"><Sidebar/></div>
        <div className="container22">
        <div className="main-content">
        <div className="create-project-container">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            placeholder="Rolex Nigma"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Write text here..."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Scope of Work</label>
          <input
            type="text"
            name="scope"
            value={formData.scope}
            onChange={handleInputChange}
            placeholder="Scope of work"
          />
        </div>

        <div className="form-group">
          <label>Assign Team Members</label>
          <input
            type="text"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleInputChange}
            placeholder="Search member name"
          />
        </div>

        <div className="form-group">
          <label>Milestones</label>
          <input
            type="text"
            name="milestones"
            value={formData.milestones}
            onChange={handleInputChange}
            placeholder="Add Milestones"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>

          
          </div>

        </div>
      </div>
    </div>
  );
}


export default CreateProject;

