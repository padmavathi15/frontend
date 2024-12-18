import React, { useState } from 'react'; // Add useState to the import statement

const CommunicationPanel = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: 'Parent-Teacher Meeting (PTA)',
      date: '2024-12-15',
      description: 'A PTA meeting to discuss student progress and upcoming events.',
      teacherInvolvement: 'All teachers are required to attend.',
    },
    {
      id: 2,
      title: 'Extracurricular Activity - Sports Day',
      date: '2024-12-20',
      description: 'Teachers are required to supervise students during the event.',
      teacherInvolvement: 'Teachers from all subjects are expected to participate in supervision.',
    },
    {
      id: 3,
      title: 'Science Fair Planning Meeting',
      date: '2024-12-22',
      description: 'Teachers involved in science-related subjects will organize the event.',
      teacherInvolvement: 'Science teachers are required to plan and judge the event.',
    },
  ]);

  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '',
    description: '',
    teacherInvolvement: '',
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new meeting
  const handleAddMeeting = () => {
    if (newMeeting.title && newMeeting.date && newMeeting.description && newMeeting.teacherInvolvement) {
      const meetingToAdd = {
        id: meetings.length + 1,
        ...newMeeting,
      };

      setMeetings([...meetings, meetingToAdd]);
      alert('New meeting added successfully!');
      setNewMeeting({ title: '', date: '', description: '', teacherInvolvement: '' });
    } else {
      alert('Please fill in all fields to add a meeting.');
    }
  };

  // Handle button click to view meeting details
  const handleMeetingClick = (meeting) => {
    alert(
      `Meeting: ${meeting.title}\nDate: ${meeting.date}\nDescription: ${meeting.description}\nTeacher Involvement: ${meeting.teacherInvolvement}`
    );
  };

  return (
    <div className="p-4">
      <h2>School Meetings</h2>
      <p>Details about PTAs and extracurricular activities requiring teacher involvement:</p>

      {/* Form to add a new meeting */}
      <div className="mt-4 border p-3">
        <h4>Add a New Meeting</h4>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={newMeeting.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="date"
            value={newMeeting.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            name="description"
            value={newMeeting.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Teacher Involvement"
            name="teacherInvolvement"
            value={newMeeting.teacherInvolvement}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-success" onClick={handleAddMeeting}>
          Add Meeting
        </button>
      </div>

      {/* Display list of school meetings or activities */}
      <ul className="list-group mt-4">
        {meetings.map((meeting) => (
          <li key={meeting.id} className="list-group-item">
            <h5 className="text-primary">{meeting.title}</h5>
            <small className="text-muted">Date: {meeting.date}</small>
            <p className="mt-2">{meeting.description}</p>
            <button
              className="btn btn-info"
              onClick={() => handleMeetingClick(meeting)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationPanel;
