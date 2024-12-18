import React, { useState } from 'react';
import TeacherSidebar from './TeacherSibebar'
import ClassroomOverview from '../section_components/ClassroomOverview';
import AssignmentTracker from '../section_components/AssignmentTracker';
import ClassTimetable from '../section_components/ClassTimetable';
import StudentPerformanceOverview from '../section_components/StudentPerformanceOverview';
import CommunicationPanel from '../section_components/CommunicationPanel';
import TestSection from '../section_components/TestSection';
import SyllabusDetails from '../section_components/SyllabusDetails';
import TeacherNavbar from './TeacherNavbar';

// Enum-like object for section keys
const SECTIONS = {
  CLASSROOM_OVERVIEW: 'ClassroomOverview',
  ASSIGNMENT_TRACKER: 'AssignmentTracker',
  CLASS_TIMETABLE: 'ClassTimetable',
  STUDENT_PERFORMANCE: 'StudentPerformanceOverview',
  COMMUNICATION_PANEL: 'CommunicationPanel',
  TEST:'Test',
  SYLLABUS:'Syllabus',
};

const TeacherPortal = () => {
  const [currentSection, setCurrentSection] = useState(SECTIONS.CLASSROOM_OVERVIEW);

  const renderSection = () => {
    switch (currentSection) {
      case SECTIONS.CLASSROOM_OVERVIEW:
        return <ClassroomOverview />;
      case SECTIONS.ASSIGNMENT_TRACKER:
        return <AssignmentTracker />;
      case SECTIONS.CLASS_TIMETABLE:
        return <ClassTimetable />;
      case SECTIONS.STUDENT_PERFORMANCE:
        return <StudentPerformanceOverview />;
      case SECTIONS.COMMUNICATION_PANEL:
        return <CommunicationPanel />;
      case SECTIONS.TEST:
        return <TestSection />;
        case SECTIONS.SYLLABUS:
          return <SyllabusDetails />;
      default:
        return <h1 className="text-center my-5">Welcome to the Teacher Portal</h1>;
    }
  };

  return (
    <div>
      <TeacherNavbar/>
   
    <div className="d-flex">
      {/* Sidebar */}
      <TeacherSidebar setCurrentSection={setCurrentSection} />
      
      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: '250px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}
      >
        {renderSection()}
      </div>
    </div>
    </div>
  );
};

export default TeacherPortal;
