import React, { useState } from 'react';
import axios from 'axios';

function RunningProgramGenerator() {
  const [distance, setDistance] = useState('');
  const [runningProgram, setRunningProgram] = useState('');

  const handleSubmit = async (e: any) => {
    console.log('handle submit');
    e.preventDefault();

    try {
      // Send request to backend to generate running program
      const response = await axios.post('/generate-running-program', {
        distance,
      });
      // Update state with generated running program
      setRunningProgram(response.data.runningProgram);
    } catch (error) {
      console.error('Error generating running program:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select distance:
          <select
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          >
            <option value="5k">5k</option>
            <option value="10k">10k</option>
          </select>
        </label>
        <button type="submit">Generate Running Program</button>
      </form>
      {runningProgram && (
        <div>
          <h2>Generated Running Program:</h2>
          <p>{runningProgram}</p>
        </div>
      )}
    </div>
  );
}

export default RunningProgramGenerator;
