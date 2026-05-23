import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1>Octofit Tracker</h1>
        <nav className="nav nav-pills">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/health">
            Health
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health" element={<HealthPage />} />
      </Routes>
    </div>
  );
}

export default App;
