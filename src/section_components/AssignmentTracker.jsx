import React, { useState } from "react";


const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState({
    "10th": [
      {
        id: 1,
        title: "Math Homework",
        dueDate: "20th December 2024",
        status: "Pending",
        subject: "Mathematics",
        submissions: [
          { studentName: "John Doe", status: "Submitted", grade: "A" },
          { studentName: "Jane Smith", status: "Not Submitted", grade: null },
          { studentName: "Alice Johnson", status: "Submitted", grade: "B" },
        ],
      },
      {
        id: 2,
        title: "Science Project",
        dueDate: "25th December 2024",
        status: "Submitted",
        subject: "Science",
        submissions: [
          { studentName: "John Doe", status: "Graded", grade: "A+" },
          { studentName: "Jane Smith", status: "Submitted", grade: "B+" },
          { studentName: "Alice Johnson", status: "Not Submitted", grade: null },
        ],
      },
    ],
    "9th": [
      {
        id: 1,
        title: "History Assignment",
        dueDate: "15th December 2024",
        status: "Pending",
        subject: "History",
        submissions: [
          { studentName: "Bob Brown", status: "Not Submitted", grade: null },
          { studentName: "Alice Johnson", status: "Submitted", grade: "B" },
        ],
      },
    ],
  });

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedClass, setSelectedClass] = useState("10th");
  const [newClassName, setNewClassName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    subject: "",
  });

  const [classData, setClassData] = useState({
    "10th": [
      { studentName: "John Doe", status: "Present" },
      { studentName: "Jane Smith", status: "Absent" },
    ],
    "9th": [
      { studentName: "Alice Johnson", status: "Present" },
      { studentName: "Bob Brown", status: "Present" },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: assignments[selectedClass].length + 1,
      title: formData.title,
      dueDate: formData.dueDate,
      subject: formData.subject,
      submissions: [],
    };

    setAssignments({
      ...assignments,
      [selectedClass]: [...assignments[selectedClass], newAssignment],
    });

    setFormData({ title: "", dueDate: "", subject: "" });
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedAssignment(null);
  };

  const handleAddClass = () => {
    if (newClassName && !classData[newClassName]) {
      setClassData({
        ...classData,
        [newClassName]: [],
      });
      setSelectedClass(newClassName);
      setNewClassName("");
    } else {
      alert("Class name is empty or already exists.");
    }
  };

  const handleViewSubmissions = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleToggleStatus = (studentName) => {
    if (selectedAssignment) {
      const updatedSubmissions = selectedAssignment.submissions.map((sub) =>
        sub.studentName === studentName
          ? { ...sub, status: sub.status === "Submitted" ? "Not Submitted" : "Submitted" }
          : sub
      );

      const updatedAssignments = assignments[selectedClass].map((assignment) =>
        assignment.id === selectedAssignment.id
          ? { ...assignment, submissions: updatedSubmissions }
          : assignment
      );

      setAssignments({
        ...assignments,
        [selectedClass]: updatedAssignments,
      });
    }
  };

  const handleAlertParent = () => {
    alert("Notification sent to parent successfully.");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-12 p-4">
          {/* Header */}
          <div className="header mb-4">
            <h3 className="font-weight-bold">Assignment Tracker - {selectedClass}</h3>
          </div>

          {/* Class Dropdown and Add New Class */}
          <div className="form-group">
            <label className="font-weight-bold">Select Class</label>
            <select className="form-control" value={selectedClass} onChange={handleClassChange}>
              {Object.keys(classData).map((className) => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="font-weight-bold">New Class Name</label>
            <input
              type="text"
              className="form-control"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={handleAddClass}>Add New Class</button>

          {/* Assignment Form */}
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h5 className="font-weight-bold">Add Assignment for {selectedClass} Class</h5>
              <form onSubmit={handleAddAssignment}>
                <div className="form-group">
                  <label className="font-weight-bold">Assignment Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Assignment</button>
              </form>
            </div>
          </div>

          {/* Assignment List */}
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h5 className="font-weight-bold">Assignments for {selectedClass} Class</h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Assignment Title</th>
                    <th>Subject</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments[selectedClass].map((assignment) => (
                    <tr key={assignment.id}>
                      <td>{assignment.title}</td>
                      <td>{assignment.subject}</td>
                      <td>{assignment.dueDate}</td>
                      <td>{assignment.status}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => handleViewSubmissions(assignment)}
                        >
                          View Submissions
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Submissions View */}
          {selectedAssignment && (
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h5 className="font-weight-bold">Submissions for: {selectedAssignment.title}</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Status</th>
                      <th>Grade</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedAssignment.submissions.map((submission, index) => (
                      <tr key={index}>
                        <td>{submission.studentName}</td>
                        <td>
                          <button
                            className={`btn ${
                              submission.status === "Submitted"
                                ? "btn-success"
                                : "btn-warning"
                            } btn-sm`}
                            onClick={() => handleToggleStatus(submission.studentName)}
                          >
                            {submission.status}
                          </button>
                        </td>
                        <td>{submission.grade || "N/A"}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={handleAlertParent}
                          >
                            Alert Parent
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentTracker;