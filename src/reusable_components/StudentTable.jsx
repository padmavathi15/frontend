import React from 'react';

const StudentTable = () => {
  const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
  ];

  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
