import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetectionPage from './pages/DetectionPage'; 
import LearnPage from './pages/LearnPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">🛡️ DeepFake Guardian</div>
          <nav className="app-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Overview</NavLink>
            <NavLink to="/detection" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Detection</NavLink>
            <NavLink to="/learn" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Learn</NavLink>
          </nav>
        </header>
        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detection" element={<DetectionPage />} />
            <Route path="/learn" element={<LearnPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;