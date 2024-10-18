import React, {useState} from 'react'

function CreateProjectForm() {

    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        scopeOfWork: '',
        teamMembers: '',
        linkedProjects: '',
        milestones: [{ title: '', dueDate: '', amount: '', description: '' }]
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleMilestoneChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMilestones = formData.milestones.map((milestone, i) => 
          i === index ? { ...milestone, [name]: value } : milestone
        );
        setFormData({ ...formData, milestones: updatedMilestones });
      };
    
      const addMilestone = () => {
        setFormData({
          ...formData,
          milestones: [...formData.milestones, { title: '', dueDate: '', amount: '', description: '' }]
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
    
      const handleReset = () => {
        setFormData({
          projectName: '',
          description: '',
          scopeOfWork: '',
          teamMembers: '',
          linkedProjects: '',
          milestones: [{ title: '', dueDate: '', amount: '', description: '' }]
        });
      };

  return (
    <div className="create-project-container">
      <h2 className="create-project-heading">Create New Project</h2>
      <p>Create your new project add the details</p>
      <form onSubmit={handleSubmit} className="create-project-form">
        <div className='project-top'>
        <div className="create-project-section">
        <label>Project Name</label>
        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} className="create-project-input" />
            

          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="create-project-textarea"></textarea>
        </div>

        <div className="create-project-section">
          <label>Scope of Work</label>
          <input type="text" name="scopeOfWork" value={formData.scopeOfWork} onChange={handleChange} className="create-project-input" />

          <label>Assign Team Members</label>
          <input type="text" name="teamMembers" value={formData.teamMembers} onChange={handleChange} className="create-project-input" />

          <label>Link Existing Projects</label>
          <input type="text" name="linkedProjects" value={formData.linkedProjects} onChange={handleChange} className="create-project-input" />
        </div>
        </div>
        

        <div className="create-project-milestones">
            <div className='milestone-heading'>
            <h3>Set Up Milestones</h3>
          <button type="button" onClick={addMilestone} className="create-project-add-milestone-btn">Add New Milestone</button>
            </div>
          {formData.milestones.map((milestone, index) => (
            <div key={index} className="create-project-milestone-item">
              <div className="create-project-milestone-inline-group">
                <div className='create-project-milestone-title-amount'>
                    <div>
                        <label>Milestone Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Milestone Title"
                  value={milestone.title}
                  onChange={(e) => handleMilestoneChange(index, e)}
                  className="create-project-milestone-input"
                /></div>
                <div>
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (INR)"
                  value={milestone.amount}
                  onChange={(e) => handleMilestoneChange(index, e)}
                  className="create-project-milestone-input"
                />
                    </div>
            
                </div>
                <div>
                <label>due on</label>
                <input
                  type="date"
                  name="dueDate"
                  placeholder="Due Date"
                  value={milestone.dueDate}
                  onChange={(e) => handleMilestoneChange(index, e)}
                  className="create-project-milestone-input"
                />
                </div>
              </div>
              <div className="create-project-milestone-inline-group">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Description"
                value={milestone.description}
                onChange={(e) => handleMilestoneChange(index, e)}
                className="create-project-milestone-description"
              ></textarea>
              </div>
            </div>
          ))}
        </div>
        <div className="button-group">
          <button type="submit" className="create-project-submit-btn">Create Project</button>
          <button type="button" onClick={handleReset} className="create-project-reset-btn">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProjectForm
