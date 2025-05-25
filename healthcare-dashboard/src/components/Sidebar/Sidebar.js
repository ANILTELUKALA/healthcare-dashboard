import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>History</li>
        <li>Calendar</li>
        <li>Appointment</li>
        <li>Statistics</li>
      </ul>

      <h2 className="sidebar-title">Tools</h2>
      <ul className="sidebar-menu">
        <li>Chat</li>
        <li>Support</li>
      </ul>

      <h2 className="sidebar-title">Settings</h2>
      <ul className="sidebar-menu">
        
      </ul>
    </div>
  );
}

export default Sidebar;