
import { Link } from 'react-router-dom';
import { Building2, User, Mail, Lock, Phone } from 'lucide-react';

function Register() {
  return (
    <section className="auth-section">
      <div className="auth-card">
        <div className="auth-logo">
          <Building2 size={32} />
        </div>

        <h2>Create Account</h2>
        <p>Join NagarSeva and improve your neighbourhood.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Registration will be connected to the backend.');
        }}>
          <label>Full Name</label>
          <div className="input-group">
            <User size={18} />
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <label>Email Address</label>
          <div className="input-group">
            <Mail size={18} />
            <input type="email" placeholder="Enter your email" required />
          </div>

          <label>Mobile Number</label>
          <div className="input-group">
            <Phone size={18} />
            <input type="tel" placeholder="Enter mobile number" required />
          </div>

          <label>Password</label>
          <div className="input-group">
            <Lock size={18} />
            <input type="password" minLength="8"
              placeholder="Create password" required />
          </div>

          <button className="btn btn-primary full-btn" type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-bottom">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
