import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClosingText from './components/closing';

import './utils/styles/App.css';
import Main from './components/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/close" element={<ClosingText />} />
      </Routes>
    </Router>
  );
}

export default App;
