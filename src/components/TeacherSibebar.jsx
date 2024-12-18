import React from 'react';

const TeacherSidebar = ({ setCurrentSection }) => {
  const sections = [
    { id: 'ClassroomOverview', label: 'Classroom Overview', icon: 'bi bi-house-door' },
    { id: 'AssignmentTracker', label: 'Assignment Tracker', icon: 'bi bi-journal-text' },
    { id: 'ClassTimetable', label: 'Class Timetable', icon: 'bi bi-calendar-event' },
    { id: 'StudentPerformanceOverview', label: 'Student Performance', icon: 'bi bi-bar-chart' },
    { id: 'CommunicationPanel', label: 'Communication Panel', icon: 'bi bi-chat-dots' },
    { id: 'Test', label: 'Test', icon: 'bi bi-chat-dots' },
    { id: 'Syllabus', label: 'Syllabus', icon: 'bi bi-people-fill' },
  ];

  return (
    <div
      className="bg-light border-end"
      style={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
      }}
    >
      <div className="p-4 text-center">
        <h5 className="text-primary fw-bold">Teacher Portal</h5>
      </div>
      <div className="list-group list-group-flush">
        {sections.map((section) => (
          <button
            key={section.id}
            className="list-group-item list-group-item-action mt-2 bg-light text-dark d-flex align-items-center border-0 sidebar-button"
            onClick={() => setCurrentSection(section.id)}
            style={{ cursor: 'pointer', transition: '0.3s' }}
          >
            <i className={`${section.icon} me-2`}></i>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeacherSidebar;
