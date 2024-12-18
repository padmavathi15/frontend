import React from 'react';

const Timetable = () => {
  const timetable = [
    { day: 'Monday', subjects: [
        { subject: 'Math', time: '9:00 AM' },
        { subject: 'English', time: '10:30 AM' },
        { subject: 'Free Hour', time: '12:00 PM' },
        { subject: 'Physical Education', time: '2:00 PM' }
      ] },
    { day: 'Tuesday', subjects: [
        { subject: 'Science', time: '9:00 AM' },
        { subject: 'Chemistry', time: '10:30 AM' },
        { subject: 'Biology', time: '12:00 PM' },
        { subject: 'Free Hour', time: '2:00 PM' }
      ] },
    { day: 'Wednesday', subjects: [
        { subject: 'Math', time: '9:00 AM' },
        { subject: 'Art', time: '10:30 AM' },
        { subject: 'Free Hour', time: '12:00 PM' },
        { subject: 'Music', time: '2:00 PM' }
      ] },
    { day: 'Thursday', subjects: [
        { subject: 'English', time: '9:00 AM' },
        { subject: 'Physics', time: '10:30 AM' },
        { subject: 'Drama', time: '12:00 PM' },
        { subject: 'Free Hour', time: '2:00 PM' }
      ] },
    { day: 'Friday', subjects: [
        { subject: 'History', time: '9:00 AM' },
        { subject: 'Math', time: '10:30 AM' },
        { subject: 'Chemistry', time: '12:00 PM' },
        { subject: 'Free Hour', time: '2:00 PM' }
      ] },
  ];

  return (
    <table className="table table-bordered">
      <thead className="table-success">
        <tr>
          <th>Day</th>
          <th>Subject</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {timetable.map((entry, index) => (
          <React.Fragment key={index}>
            {entry.subjects.map((subjectEntry, subjectIndex) => (
              <tr key={subjectIndex}>
                {subjectIndex === 0 ? (
                  <td rowSpan={entry.subjects.length}>{entry.day}</td>
                ) : null}
                <td>{subjectEntry.subject}</td>
                <td>{subjectEntry.time}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
