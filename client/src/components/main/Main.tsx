import { useState } from 'react';
import './Main.css';
import ActivityCard from '../info_card/ActivityCard';
import { useSelector } from 'react-redux';
import { redirectToStravaAuth } from '../../utils/utils';
import { RootState } from '../../redux/store';

function Main() {
  const [isLoggedIn] = useState(true);
  const runner = useSelector((state: RootState) => state.runner.runnerInstance);
  const runnerActivities = useSelector(
    (state: RootState) => state.runner.runnerActivities
  );

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
          {runner ? (
            <>
              {runnerActivities && runnerActivities.length > 0 ? (
                // Render the last 10 activities
                runnerActivities
                  .slice(-10)
                  .map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                  ))
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
