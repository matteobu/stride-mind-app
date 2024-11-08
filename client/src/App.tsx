import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import RunningProgramGenerator from './components/program-generator';
import StravaAuth from './components/auth/stravaAuth';
import Header from './components/header/Header';
import RunningActivitiesCalendar from './components/calendar/Calendar';
import { useEffect } from 'react';
import { fetchActivities, fetchUserData } from './utils/utils';
import { useDispatch } from 'react-redux';
import {
  setRunnerActivities,
  setRunnerInstance,
} from './redux/slices/runnerSlice';
import { Runner, RunnerActivity } from './interfaces/runner';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedToken = localStorage.getItem('strava_access_token');
    if (storedToken) {
      handleRunnerData(storedToken);
      // setIsLoggedIn(true);
    }
  }, []);

  const handleRunnerData = async (storedToken: string) => {
    try {
      if (storedToken) {
        const userData: Runner = await fetchUserData(storedToken);
        dispatch(setRunnerInstance(userData));

        const activities: RunnerActivity[] = await fetchActivities(storedToken);
        console.log(activities);
        dispatch(setRunnerActivities(activities));
      }
    } catch (error) {
      console.error('Error fetching runner data:', error);
    }
  };

  console.log('app called ');
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/program" element={<RunningProgramGenerator />} />
          <Route path="/strava-auth" element={<StravaAuth />} />
          <Route path="/calendar" element={<RunningActivitiesCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
