
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>NagarSeva</h3>
        <p>
          Together, let's build cleaner, safer and smarter cities.
        </p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/report-issue">Report Issue</Link>
        <Link to="/track-complaint">Track Complaint</Link>
        <Link to="/login">Login</Link>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} NagarSeva. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
