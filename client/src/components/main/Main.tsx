import React, { useState, useEffect } from 'react';
import './Main.css';
import ActivityCard from '../info_card/ActivityCard';
import { useDispatch } from 'react-redux';
import { setRunnerInstance } from '../../redux/runnerSlice';
import {
  fetchActivities,
  fetchUserData,
  redirectToStravaAuth,
} from '../../utils/utils';
import { Runner } from '../../interfaces/runner';

function Main() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [runnerData, setRunnerData] = useState<Runner | null>(null);
  const [runnerActivities, setRunnerActivities] = useState<any[]>([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('strava_access_token');
    if (storedToken) {
      handleRunnerData(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const handleRunnerData = async (storedToken: string) => {
    try {
      if (storedToken) {
        const userData = await fetchUserData(storedToken);
        setRunnerData(userData);

        // Convert runnerInstance to a plain object before dispatching
        dispatch(setRunnerInstance(userData));

        const activities = await fetchActivities(storedToken);
        setRunnerActivities(activities);
      }
    } catch (error) {
      console.error('Error fetching runner data:', error);
    }
  };

  const handleLogin = () => {
    redirectToStravaAuth();
  };

  return (
    <div className="Main">
      {!isLoggedIn ? (
        <button onClick={handleLogin} className="login-button">
          Login with Strava
        </button>
      ) : (
        <div className="Main-body">
          {runnerData ? (
            <>
              {runnerActivities && runnerActivities.length > 0 ? (
                <ActivityCard activity={runnerActivities[0]} />
              ) : (
                <p>No activities available.</p>
              )}
            </>
          ) : (
            <p>Loading runner data...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Main;
