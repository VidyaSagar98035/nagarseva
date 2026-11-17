
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, ShieldCheck, Clock,
  Construction, Trash2, Lightbulb, Droplets,
  ClipboardList
} from 'lucide-react';

const services = [
  {
    title: 'Road & Potholes',
    description: 'Report damaged roads and dangerous potholes.',
    icon: Construction
  },
  {
    title: 'Garbage Management',
    description: 'Report overflowing bins and uncollected waste.',
    icon: Trash2
  },
  {
    title: 'Streetlight Issues',
    description: 'Report broken or non-working streetlights.',
    icon: Lightbulb
  },
  {
    title: 'Water Leakage',
    description: 'Report leaking pipelines and water wastage.',
    icon: Droplets
  }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">SMART CITY • BETTER TOMORROW</span>

          <h1>
            Your City, Your Voice.
            <span> Let's Make It Better.</span>
          </h1>

          <p>
            Report civic problems, track their progress and help
            make your neighbourhood cleaner, safer and smarter.
            Your one report can make a difference.
          </p>

          <div className="hero-actions">
            <Link to="/report-issue" className="btn btn-primary">
              Report an Issue <ArrowRight size={18} />
            </Link>

            <Link to="/track-complaint" className="btn btn-outline">
              Track Complaint
            </Link>
          </div>

          <div className="hero-features">
            <span><ShieldCheck size={17} /> Transparent Reporting</span>
            <span><MapPin size={17} /> Location Based</span>
            <span><Clock size={17} /> Real-time Tracking</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="city-card">
            <div className="city-top">
              <span className="live-dot"></span>
              Smart Civic Reporting
            </div>
            <div className="city-illustration">
              <div className="sun"></div>
              <div className="building building-one"></div>
              <div className="building building-two"></div>
              <div className="building building-three"></div>
              <div className="road"></div>
              <div className="tree">🌳</div>
              <div className="tree tree-two">🌳</div>
              <div className="location-pin">
                <MapPin size={26} />
              </div>
            </div>
            <div className="city-bottom">
              <div>
                <strong>One Platform</strong>
                <small>For every civic concern</small>
              </div>
              <ClipboardList size={30} />
            </div>
          </div>
        </div>
      </section>

      <section className="services section">
        <div className="section-heading">
          <span className="eyebrow">WHAT CAN YOU REPORT?</span>
          <h2>Making Every Civic Issue Visible</h2>
          <p>
            Report local problems directly through NagarSeva.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={27} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/report-issue">
                  Report issue <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="how-section section">
        <div className="section-heading">
          <span className="eyebrow">SIMPLE PROCESS</span>
          <h2>How NagarSeva Works</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Report</h3>
            <p>Submit your civic complaint with a photo and location.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Get Assigned</h3>
            <p>Your complaint is reviewed and assigned to the department.</p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Track Progress</h3>
            <p>Follow your complaint status through the platform.</p>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>Get Resolution</h3>
            <p>Check the resolution and share your feedback.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Improve Our Neighbourhood Together.</h2>
        <p>Your voice matters. Report a civic issue today.</p>
        <Link to="/register" className="btn btn-white">
          Join NagarSeva <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

export default Home;
