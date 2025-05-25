import React from 'react';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="card-header">
      <span>🫁</span>
      <h1>Lungs</h1>
      </div>
      <p className="anatomy-date">Date: 26 Oct 2021</p>
      <div className="loading-bar-container">
          <div className="loading-bar1" style={{ width: '75%' }}></div>
        </div>
      <div className="divider"></div>
      <div className="card-header">
      <span>🦷</span>
      <h2>Teeth</h2>
      </div> 
      <p className="anatomy-date">Date: 26 Oct 2021</p>
      <div className="loading-bar-container">
          <div className="loading-bar2" style={{ width: '75%' }}></div>
        </div>
      <div className="divider"></div>
      <div className="card-header"> 
      <span>🦴</span>
      <h2>Bone</h2>
      </div>
      <p className="anatomy-date">Date: 26 Oct 2021</p>
      <div className="loading-bar-container">
          <div className="loading-bar3" style={{ width: '75%' }}></div>
        </div>
      <div className="divider"></div>

      <div className="details-footer">
        <p>Details </p>
      </div>
    </div>
  );
}

export default AnatomySection;