
import { Link } from 'react-router-dom';
import { Building2, Mail, Lock } from 'lucide-react';

function Login() {
  return (
    <section className="auth-section">
      <div className="auth-card">
        <div className="auth-logo">
          <Building2 size={32} />
        </div>

        <h2>Welcome Back!</h2>
        <p>Login to your NagarSeva account.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Login will be connected to the backend.');
        }}>
          <label>Email Address</label>
          <div className="input-group">
            <Mail size={18} />
            <input type="email" placeholder="Enter your email" required />
          </div>

          <label>Password</label>
          <div className="input-group">
            <Lock size={18} />
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button className="btn btn-primary full-btn" type="submit">
            Login
          </button>
        </form>

        <p className="auth-bottom">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
