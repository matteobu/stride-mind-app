import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import RunningProgramGenerator from './components/program-generator';
import StravaAuth from './components/auth/stravaAuth';
import Header from './components/header/Header';

function App() {
  console.log('app called ');
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/program" element={<RunningProgramGenerator />} />
          <Route path="/strava-auth" element={<StravaAuth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
