import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClassroomOverview = () => {
  const [marks, setMarks] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [markForm, setMarkForm] = useState({ student_id: '', studentName: '', subjectName: '', marks: '' });
  const [attendanceForm, setAttendanceForm] = useState({ student_id: '', studentName: '', attendance: '', percentage: '' });

  // Fetch Marks
  const fetchMarks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/marks');
      setMarks(response.data);
    } catch (error) {
      console.error('Error fetching marks:', error);
    }
  };

  // Fetch Attendance
  const fetchAttendance = async () => {
    try {
      const response = await axios.get('http://localhost:5000/attendance');
      setAttendance(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    }
  };

  // Handle Mark Edit
  const handleMarkEdit = (mark) => {
    setMarkForm({
      student_id: mark.student_id,
      studentName: mark.student_name,
      subjectName: mark.subject_name,
      marks: mark.marks,
    });
  };

  // Handle Attendance Edit
  const handleAttendanceEdit = (att) => {
    setAttendanceForm({
      student_id: att.student_id,
      studentName: att.student_name,
      attendance: att.attendance,
      percentage: att.percentage,
    });
  };

  // Handle Add Mark
  const handleAddMark = () => {
    setMarkForm({ student_id: '', studentName: '', subjectName: '', marks: '' });
  };

  // Handle Add Attendance
  const handleAddAttendance = () => {
    setAttendanceForm({ student_id: '', studentName: '', attendance: '', percentage: '' });
  };

  // Update Mark Data
  const handleMarkUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting updated mark data:', markForm);

      const response = await axios.put(`http://localhost:5000/marks/${markForm.student_id}`, markForm);

      console.log('Mark updated successfully:', response.data);

      fetchMarks();

      setMarkForm({ student_id: '', studentName: '', subjectName: '', marks: '' });
    } catch (error) {
      console.error('Error updating marks:', error);
    }
  };

  // Update Attendance Data
  const handleAttendanceUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting updated attendance data:', attendanceForm);

      const response = await axios.put(`http://localhost:5000/attendance/${attendanceForm.student_id}`, attendanceForm);

      console.log('Attendance updated successfully:', response.data);

      fetchAttendance();

      setAttendanceForm({ student_id: '', studentName: '', attendance: '', percentage: '' });
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  // Add Mark Data
  const handleAddMarkSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting new mark data:', markForm);

      const response = await axios.post('http://localhost:5000/marks', markForm);

      console.log('Mark added successfully:', response.data);

      fetchMarks();

      setMarkForm({ student_id: '', studentName: '', subjectName: '', marks: '' });
    } catch (error) {
      console.error('Error adding mark:', error);
    }
  };

  // Add Attendance Data
  const handleAddAttendanceSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting new attendance data:', attendanceForm);

      const response = await axios.post('http://localhost:5000/attendance', attendanceForm);

      console.log('Attendance added successfully:', response.data);

      fetchAttendance();

      setAttendanceForm({ student_id: '', studentName: '', attendance: '', percentage: '' });
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  };

  // Delete Marks
  const deleteMark = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/marks/${id}`);
      fetchMarks();
    } catch (error) {
      console.error('Error deleting mark:', error);
    }
  };

  // Delete Attendance
  const deleteAttendance = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/attendance/${id}`);
      fetchAttendance();
    } catch (error) {
      console.error('Error deleting attendance:', error);
    }
  };

  useEffect(() => {
    fetchMarks();
    fetchAttendance();
  }, []);

  return (
    <div className="container">
      <h2>Classroom Overview</h2>

      {/* Add Mark Button */}
      <button
        className="btn btn-success mb-3"
        data-bs-toggle="modal"
        data-bs-target="#addMarkModal"
        onClick={handleAddMark}
      >
        Add Mark
      </button>

      {/* Marks Table */}
      <h4>Marks Data</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark.student_id}>
              <td>{mark.student_name}</td>
              <td>{mark.subject_name}</td>
              <td>{mark.marks}</td>
              <td>
                <button
                  onClick={() => handleMarkEdit(mark)}
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#editMarkModal"
                >
                  Edit
                </button>
                <button onClick={() => deleteMark(mark.student_id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Mark Modal */}
      <div className="modal fade" id="editMarkModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Marks</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleMarkUpdate}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Student Name"
                  value={markForm.studentName}
                  onChange={(e) => setMarkForm({ ...markForm, studentName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Subject Name"
                  value={markForm.subjectName}
                  onChange={(e) => setMarkForm({ ...markForm, subjectName: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Marks"
                  value={markForm.marks}
                  onChange={(e) => setMarkForm({ ...markForm, marks: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Save Changes
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add Mark Modal */}
      <div className="modal fade" id="addMarkModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Marks</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddMarkSubmit}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Student Name"
                  value={markForm.studentName}
                  onChange={(e) => setMarkForm({ ...markForm, studentName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Subject Name"
                  value={markForm.subjectName}
                  onChange={(e) => setMarkForm({ ...markForm, subjectName: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Marks"
                  value={markForm.marks}
                  onChange={(e) => setMarkForm({ ...markForm, marks: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Save Mark
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add Attendance Button */}
      <button
        className="btn btn-success mb-3"
        data-bs-toggle="modal"
        data-bs-target="#addAttendanceModal"
        onClick={handleAddAttendance}
      >
        Add Attendance
      </button>

      {/* Attendance Table */}
      <h4>Attendance Data</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((att) => (
            <tr key={att.student_id}>
              <td>{att.student_name}</td>
              <td>{att.attendance}</td>
              <td>{att.percentage}</td>
              <td>
                <button
                  onClick={() => handleAttendanceEdit(att)}
                  className="btn btn-warning btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#editAttendanceModal"
                >
                  Edit
                </button>
                <button onClick={() => deleteAttendance(att.student_id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Attendance Modal */}
      <div className="modal fade" id="editAttendanceModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Attendance</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAttendanceUpdate}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Student Name"
                  value={attendanceForm.studentName}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, studentName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Attendance"
                  value={attendanceForm.attendance}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, attendance: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Percentage"
                  value={attendanceForm.percentage}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, percentage: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Save Changes
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add Attendance Modal */}
      <div className="modal fade" id="addAttendanceModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Attendance</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleAddAttendanceSubmit}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Student Name"
                  value={attendanceForm.studentName}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, studentName: e.target.value })}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Attendance"
                  value={attendanceForm.attendance}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, attendance: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="form-control mb-2"
                  placeholder="Percentage"
                  value={attendanceForm.percentage}
                  onChange={(e) => setAttendanceForm({ ...attendanceForm, percentage: e.target.value })}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Save Attendance
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomOverview;
