import React from 'react';
import './CalendarSchedule.css';

function CalendarSchedule() {
  return (
    <div className="calendar-schedule-section">
      <div className="section-header">
        <h2>October 2021</h2>
        <span>⬅️ ➡️</span>
        <div className="header-buttons">
          <button className="icon-button">
            <span className="user-icon">👤</span>
          </button>
          <button className="icon-button">
            <span className="plus-icon">+</span>
          </button>
          
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        <div className="calendar-row header-row">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thurs</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        
        <div className="calendar-row dates-row">
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
        </div>
        
        <div className="calendar-row">
          <div>10:00</div>
          <div>08:00</div>
          <div>12:00</div>
          <div>10:00</div>
          <div>—</div>
          <div className="appointment-card2">12:00</div>
          <div className="appointment-card2">09:00</div>
        </div>
        
        <div className="calendar-row">
          <div>11:00</div>
          <div className="appointment-card1">09:00</div>
          <div>—</div>
          <div className="appointment-card2">11:00</div>
          <div>14:00</div>
          <div>14:00</div>
          <div>10:00</div>
        </div>
        
        <div className="calendar-row">
          <div>12:00</div>
          <div>10:00</div>
          <div>13:00</div>
          <div>—</div>
          <div>16:00</div>
          <div>15:00</div>
          <div>11:00</div>
        </div>
      </div>

      {/* Appointments Section */}
      <div className="appointments-grid">
        <div className="card-header">
          <div className="appointment-card1">
          <div className="card-header">
            <h3 >Dentist</h3>
            <span >🦷</span>
          </div>
          <p>09:00-11:00</p>
          <p>Dr. Cameron Williamson</p>
          
          </div>
        
        <div className="appointment-card">
          <div className="card-header">
          <h3>Physiotherapy Appointment</h3>
          <span >💪</span>
          </div>
          <p>11:00-12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>

      {/* Upcoming Schedule */}
      <div className="upcoming-schedule">
        <h3>The Upcoming Schedule</h3>
        
        <div className="schedule-day">
          <h4>On Thursday</h4>
          <div className="appointment-grid">
            <div className="appointment-item">
              <div className="card-header">
              <p><strong>Health checkup complete</strong></p>
              <span >💉</span>
              </div>
              <p>11:00 AM</p>
            </div>
            <div className="appointment-item">
              <div className="card-header">
              <p><strong>Ophthalmologist</strong></p>
              <span >👁️</span>
              </div>
              <p>14:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="schedule-day">
          <h4>On Saturday</h4>
          <div className="appointment-grid">
          <div className="appointment-item">
            <div className="card-header">
            <p><strong>Cardiologist</strong></p>
            <span >❤️</span>
            </div>
            <p>12:00 AM</p>
          </div>
          <div className="appointment-item">
            <div className="card-header">
            <p><strong>Neurologist</strong></p>
            <span >👨🏻‍⚕️</span>
            </div>
            <p>16:00 PM</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSchedule;