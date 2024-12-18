import React, { useState } from 'react';
import data from '../data/data.json'; // Import the JSON data

const AssignmentTable = () => {
  const [selectedClass, setSelectedClass] = useState(data.classrooms[0].id); // Default to the first class

  const handleSendClick = () => {
    // Filter students who haven't submitted their assignments
    const notSubmittedStudents = data.students[selectedClass].filter(
      (student) => !data.submissions[selectedClass][student.id]?.submitted
    );

    // Display a message with the list of students
    const message = notSubmittedStudents.length
      ? `Students who haven't submitted:\n${notSubmittedStudents
          .map(
            (student) =>
              `ID: ${student.id}, Name: ${student.name}, Subject: ${student.subject}`
          )
          .join('\n')}`
      : 'All students have submitted their assignments!';

    alert(message);
  };

  return (
    <div className="p-4">
      <h2>Assignment Table</h2>

      {/* Class Selector */}
      <div className="mb-3">
        <label htmlFor="classSelect" className="form-label">
          Select Class:
        </label>
        <select
          id="classSelect"
          className="form-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(Number(e.target.value))}
        >
          {data.classrooms.map((classroom) => (
            <option key={classroom.id} value={classroom.id}>
              {classroom.name}
            </option>
          ))}
        </select>
      </div>

      {/* Assignments Table */}
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Assignment Title</th>
            <th>Due Date</th>
            <th>Submitted</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.students[selectedClass].map((student) =>
            data.assignments.map((assignment) => (
              <tr key={`${student.id}-${assignment.id}`}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.title}</td>
                <td>{assignment.dueDate}</td>
                <td>
                  {data.submissions[selectedClass][student.id]?.submitted
                    ? 'Yes'
                    : 'No'}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      alert(
                        `Details:\nStudent ID: ${student.id}\nStudent Name: ${student.name}\nSubject: ${assignment.subject}\nAssignment: ${assignment.title}\nDue Date: ${assignment.dueDate}\nSubmitted: ${
                          data.submissions[selectedClass][student.id]?.submitted
                            ? 'Yes'
                            : 'No'
                        }`
                      )
                    }
                  >
                    Send
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Button to Display All Not Submitted Students */}
      <div className="mt-4">
        <button className="btn btn-danger" onClick={handleSendClick}>
          Show All Not Submitted Students
        </button>
      </div>
    </div>
  );
};

export default AssignmentTable;
