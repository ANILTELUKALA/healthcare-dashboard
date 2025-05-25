// src/components/ActivityFeed/ActivityFeed.js
import React from 'react';
import './ActivityFeed.css';
import graph from '../assets/graph.png'; // Add your image

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="card-header">
      <h3 className="activity-title">Activity</h3>
      <p className="appointment-count">3 appointments on this week</p>
      </div>
      <img src={graph} alt="Healthy Heart" />
      <div className="weekdays-container">
        <span className="weekday"><strong>Mon</strong></span>
        <span className="weekday"><strong>Tues</strong></span>
        <span className="weekday"><strong>Wed</strong></span>
        <span className="weekday"><strong>Thurs</strong></span>
        <span className="weekday"><strong>Fri</strong></span>
        <span className="weekday"><strong>Sat</strong></span>
        <span className="weekday"><strong>Sun</strong></span>
      </div>
    </div>
  );
}

export default ActivityFeed;