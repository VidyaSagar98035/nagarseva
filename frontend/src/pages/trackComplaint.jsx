
import { useState } from 'react';
import { Search, ClipboardList } from 'lucide-react';

function TrackComplaint() {
  const [complaintId, setComplaintId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint tracking will be connected to the backend.');
  };

  return (
    <section className="track-section section">
      <div className="track-card">
        <ClipboardList size={45} />
        <h1>Track Your Complaint</h1>
        <p>Enter your complaint ID to check its current status.</p>

        <form onSubmit={handleSubmit}>
          <input
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            placeholder="Enter Complaint ID"
            required
          />

          <button className="btn btn-primary full-btn" type="submit">
            <Search size={18} /> Track Complaint
          </button>
        </form>
      </div>
    </section>
  );
}

export default TrackComplaint;
