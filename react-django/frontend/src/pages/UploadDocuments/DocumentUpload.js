import React, { useState } from 'react';
import NavBar from '../../component/Navbar/NavBar';
import Sidebar from '../../component/Sidebar/Sidebar';
import './DocumentUpload.css'; // Custom CSS file for styling

function DocumentUpload() {
  const [documentName, setDocumentName] = useState('');
  const [assignee, setAssignee] = useState('');
  const [reviewers, setReviewers] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    setUploadedFiles([...uploadedFiles, ...event.target.files]);
  };

  const handleReviewersChange = (event) => {
    setReviewers([...new Set([...reviewers, event.target.value])]);
    event.target.value = ''; // Reset input
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data
    console.log({ documentName, assignee, reviewers, uploadedFiles });
  };

  const removeReviewer = (reviewer) => {
    setReviewers(reviewers.filter(r => r !== reviewer));
  };

  return (
    <div className="container1">
    <NavBar/>
    <div className="container2">
      <div className="container21"><Sidebar/></div>
      <div className="container22">
        <div className="main-content">
        <div className="upload-container">
      <h2>Upload Documents</h2>
      <p>Upload your all the docs.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Document Name</label>
          <input 
            type="text" 
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            placeholder="Lorem.txt"
          />
        </div>

        <div className="form-group">
          <label>Assigner/Reviewer</label>
          <input 
            type="text" 
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            placeholder="Assigner/Reviewer"
          />
        </div>

        <div className="form-group">
          <label>Reviewers</label>
          <input 
            type="text" 
            placeholder="Add Reviewer" 
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                handleReviewersChange(e);
              }
            }}
          />
          <div className="reviewer-list">
            {reviewers.map((reviewer, index) => (
              <span key={index} className="reviewer-tag">
                {reviewer}
                <button type="button" onClick={() => removeReviewer(reviewer)}>x</button>
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Upload Documents</label>
          <div className="file-drop-area">
            <input 
              type="file" 
              onChange={handleFileUpload}
              multiple
            />
            <p>Drag & Drop files here or click to upload</p>
          </div>
          <div className="file-list">
            {uploadedFiles.length > 0 && uploadedFiles.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">Submit documents</button>
      </form>
    </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DocumentUpload;
