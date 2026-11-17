
import { Link } from 'react-router-dom';
import {
  ClipboardList, Clock, CheckCircle,
  AlertCircle, PlusCircle, MapPin
} from 'lucide-react';

function Dashboard() {
  const stats = [
    { title: 'Total Complaints', value: '00', icon: ClipboardList },
    { title: 'Pending', value: '00', icon: Clock },
    { title: 'In Progress', value: '00', icon: AlertCircle },
    { title: 'Resolved', value: '00', icon: CheckCircle }
  ];

  return (
    <section className="dashboard section">
      <div className="dashboard-heading">
        <div>
          <span className="eyebrow">CITIZEN PORTAL</span>
          <h1>My Dashboard</h1>
          <p>Manage and track your civic complaints.</p>
        </div>

        <Link to="/report-issue" className="btn btn-primary">
          <PlusCircle size={18} /> Report New Issue
        </Link>
      </div>

      <div className="stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat-card" key={item.title}>
              <Icon size={25} />
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      <div className="dashboard-panel">
        <h2>Recent Complaints</h2>
        <div className="empty-state">
          <MapPin size={40} />
          <h3>No Complaints Yet</h3>
          <p>Your submitted complaints will appear here.</p>
          <Link to="/report-issue" className="btn btn-primary">
            Report Your First Issue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
