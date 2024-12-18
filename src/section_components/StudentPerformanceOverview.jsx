import React from 'react';

const StudentPerformanceOverview = () => {
  // Example data: students with marks
  const studentsData = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', marks: 45 },
    { id: 2, name: 'Jane Smith', subject: 'Science', marks: 55 },
    { id: 3, name: 'Alice Johnson', subject: 'English', marks: 65 },
    { id: 4, name: 'Robert Brown', subject: 'History', marks: 40 },
  ];

  // Handle the "Attention" button click
  const handleAttentionClick = (name, marks) => {
    alert(`Attention required for ${name}. Marks: ${marks}`);
  };

  return (
    <div className="p-4">
      <h2>Student Performance Overview</h2>
      <h4 className="mt-4">Student Marks</h4>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.marks}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleAttentionClick(student.name, student.marks)}
                >
                  Attention
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPerformanceOverview;
