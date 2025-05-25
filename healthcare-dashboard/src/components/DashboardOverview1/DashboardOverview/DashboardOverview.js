import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import './DashboardOverview.css';
import body from '../assets/body.png'; // Add your image

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <h2 className="section-title">Dashboard Overview</h2>
      <div className="overview-content">
        <img src={body} alt="Healthy Heart" />
        <AnatomySection />
        
      </div>
    </section>
  );
}

export default DashboardOverview;