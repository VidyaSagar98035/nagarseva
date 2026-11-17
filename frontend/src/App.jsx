
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ReportIssue from './pages/ReportIssue';
import TrackComplaint from './pages/TrackComplaint';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/track-complaint" element={<TrackComplaint />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
