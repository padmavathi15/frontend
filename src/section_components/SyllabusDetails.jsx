import React, { useState } from 'react';

const SyllabusDetails = () => {
  const initialSyllabus = {
    subject: '',
    subTopic: '',
    file: null,
    fileName: '',
    date: '',
  };

  const [syllabus, setSyllabus] = useState(initialSyllabus);
  const [sentSyllabus, setSentSyllabus] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSyllabus((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSendSyllabus = () => {
    // Validation check
    if (!selectedClass || !selectedSubject || !file) {
      alert('Please select a subject, class, and upload a file to send syllabus.');
      return;
    }

    const syllabusToSend = {
      subject: selectedSubject,
      class: selectedClass,
      file: file,
      fileName: fileName,
      fileUrl: URL.createObjectURL(file), // Create a temporary URL for the file
    };

    setSentSyllabus((prev) => [...prev, syllabusToSend]);
    setSelectedClass('');
    setFile(null);
    setFileName('');
    setShowModal(false); // Close the modal after sending
  };

  return (
    <div className="p-4">
      <h3>Syllabus Details</h3>

      {/* Form to add a syllabus */}
      <div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            value={syllabus.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subTopic" className="form-label">Sub-Topic</label>
          <input
            type="text"
            id="subTopic"
            name="subTopic"
            className="form-control"
            value={syllabus.subTopic}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={syllabus.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input
            type="file"
            id="file"
            className="form-control"
            onChange={handleFileChange}
          />
          {file && <small className="text-success">{fileName}</small>}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Send Syllabus
        </button>
      </div>

      {/* Modal to select class and send syllabus */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Send Syllabus</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="classSelect" className="form-label">Select Class</label>
                  <select
                    id="classSelect"
                    className="form-select"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="">Select Class</option>
                    <option value="A">Class A</option>
                    <option value="B">Class B</option>
                    <option value="C">Class C</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="subjectSelect" className="form-label">Select Subject</label>
                  <select
                    id="subjectSelect"
                    className="form-select"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option value="">Select Subject</option>
                    <option value="Kannada">Kannada</option>
                    <option value="English">English</option>
                    <option value="Maths">Maths</option>
                  </select>
                </div>

                <button
                  className="btn btn-success"
                  onClick={handleSendSyllabus}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Display sent syllabus */}
      <div className="mt-5">
        <h4>Sent Syllabus</h4>
        {sentSyllabus.length === 0 ? (
          <p>No syllabus sent yet.</p>
        ) : (
          <ul>
            {sentSyllabus.map((syllabus, index) => (
              <li key={index}>
                <strong>Subject:</strong> {syllabus.subject} <br />
                <strong>Sent to Class:</strong> {syllabus.class} <br />
                <strong>File:</strong> 
                {syllabus.file ? (
                  <a href={syllabus.fileUrl} target="_blank" rel="noopener noreferrer">
                    Download {syllabus.fileName}
                  </a>
                ) : (
                  'No file uploaded'
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SyllabusDetails;
