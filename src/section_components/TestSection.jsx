import React, { useState } from "react";

const TestSection = () => {
  const [testLinks, setTestLinks] = useState([]);
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    date: "",
    file: null,
  });

  const classOptions = ["Class 1", "Class 2", "Class 3"];
  const sectionOptions = ["A", "B", "C"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.class && formData.section && formData.date && formData.file) {
      const fileURL = URL.createObjectURL(formData.file); // Create a local file URL
      const newLink = {
        id: testLinks.length + 1,
        ...formData,
        fileURL,
        fileName: formData.file.name,
      };

      setTestLinks([...testLinks, newLink]);
      setFormData({ class: "", section: "", date: "", file: null });
      alert("Test link created successfully!");
    } else {
      alert("Please fill in all fields and upload a file.");
    }
  };

  return (
    <div className="p-4">
      <h2>Test Section</h2>

      {/* Form for creating test links */}
      <form className="border p-3 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">Class</label>
          <select
            id="class"
            name="class"
            className="form-control"
            value={formData.class}
            onChange={handleInputChange}
          >
            <option value="">Select Class</option>
            {classOptions.map((classOption, index) => (
              <option key={index} value={classOption}>{classOption}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="section" className="form-label">Section</label>
          <select
            id="section"
            name="section"
            className="form-control"
            value={formData.section}
            onChange={handleInputChange}
          >
            <option value="">Select Section</option>
            {sectionOptions.map((sectionOption, index) => (
              <option key={index} value={sectionOption}>{sectionOption}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
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
        </div>

        <button type="submit" className="btn btn-primary">Create Link</button>
      </form>

      {/* Display created test links */}
      <ul className="list-group">
        {testLinks.map((link) => (
          <li key={link.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Class:</strong> {link.class}, <strong>Section:</strong> {link.section}, <strong>Date:</strong> {link.date}
            </div>
            <div>
              {/* Link to open the file */}
              <a
                href={link.fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link me-2"
              >
                Open File
              </a>
              <button
                className="btn btn-info"
                onClick={() =>
                  alert(
                    `Test Details:\nClass: ${link.class}\nSection: ${link.section}\nDate: ${link.date}\nFile: ${link.fileName}`
                  )
                }
              >
                Send
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestSection;
