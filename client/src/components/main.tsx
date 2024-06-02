// Main.js

import React from 'react';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome-container">
          <h1 className="welcome-heading">🏃‍♂️ Welcome, Runners! 🏃‍♀️</h1>
          <p className="welcome-text">
            Dive into your running journey with gusto, from novices to seasoned
            pros, nurturing both body and mind is key for your marathon of life.
          </p>
        </div>
      </header>

      <div className="info-section">
        <div className="stretching-section">
          <h2 className="section-heading">🏋️‍♂️ Stretching Recommendations</h2>
          <ul className="list">
            <li>Hamstring Stretch</li>
            <li>Quad Stretch</li>
            <li>Calf Stretch</li>
            <li>IT Band Stretch</li>
            {/* Feel free to add more stretching exercises */}
          </ul>
        </div>
      </div>
      <div className="info-section">
        <div className="mental-health-section">
          <h2 className="section-heading">🧘‍♂️ Mental Health Tips</h2>
          <ul className="list">
            <li>Stay mindful during your runs</li>
            <li>Set achievable goals and celebrate each victory</li>
            <li>Power up your motivation with inspiring podcasts or tunes</li>
            <li>Prioritize rest days and recovery</li>
            {/* More mental health tips can be added */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
