import React from 'react';
import DashboardOverview1 from '../DashboardOverview1/DashboardOverview1';
import './DashboardMainContent.css';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';

function DashboardMainContent() {
  return (
    <main className="dashboard-grid">
      
      <DashboardOverview1 />
      <CalendarSchedule />
      <div className="dashboard-grid">
       
        
      </div>
      
    </main>
  );
}

export default DashboardMainContent;