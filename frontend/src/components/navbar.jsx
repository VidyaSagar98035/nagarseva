
import { Link, NavLink } from 'react-router-dom';
import { Building2, Menu } from 'lucide-react';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Building2 size={25} />
        </span>
        <span>
          Nagar<span>Seva</span>
          <small>Smart Civic Platform</small>
        </span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/report-issue">Report Issue</NavLink>
        <NavLink to="/track-complaint">Track Complaint</NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/register" className="btn btn-primary">
          Get Started
        </Link>
      </div>

      <Menu className="mobile-menu" />
    </header>
  );
}

export default Navbar;
