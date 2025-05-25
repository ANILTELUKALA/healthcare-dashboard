import React from 'react';
import DashboardOverview from './DashboardOverview/DashboardOverview';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import './DashboardOverview1.css';

function DashboardOverview1() {
  return (
    <main className="dashboard-branch">
      
      <DashboardOverview />
      <ActivityFeed />
      
      
    </main>
  );
}

export default DashboardOverview1;