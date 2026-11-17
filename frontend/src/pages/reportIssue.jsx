
import { useState } from 'react';
import { Camera, MapPin, Send } from 'lucide-react';

function ReportIssue() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    address: ''
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Report form ready. Backend integration is the next stage.');
  };

  return (
    <section className="report-section section">
      <div className="section-heading">
        <span className="eyebrow">CITIZEN COMPLAINT</span>
        <h1>Report a Civic Issue</h1>
        <p>Provide accurate information to help resolve the problem.</p>
      </div>

      <form className="report-card" onSubmit={handleSubmit}>
        <label>Issue Title</label>
        <input name="title" value={form.title}
          onChange={handleChange} placeholder="Enter issue title" required />

        <label>Issue Category</label>
        <select name="category" value={form.category}
          onChange={handleChange} required>
          <option value="">Select issue category</option>
          <option value="Potholes">Road & Potholes</option>
          <option value="Garbage">Garbage Management</option>
          <option value="Streetlights">Streetlight Issues</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Other">Other Civic Issues</option>
        </select>

        <label>Problem Description</label>
        <textarea name="description" value={form.description}
          onChange={handleChange} placeholder="Describe the problem..."
          rows="5" required />

        <label>Issue Location</label>
        <div className="input-group">
          <MapPin size={18} />
          <input name="address" value={form.address}
            onChange={handleChange} placeholder="Enter complete address" required />
        </div>

        <label>Upload Issue Photo</label>
        <div className="upload-area">
          <Camera size={30} />
          <p>Upload a photo of the civic issue</p>
          <input type="file" accept="image/*"
            onChange={(e) => setImage(e.target.files[0])} />
          {image && <small>{image.name}</small>}
        </div>

        <button className="btn btn-primary full-btn" type="submit">
          <Send size={18} /> Submit Complaint
        </button>
      </form>
    </section>
  );
}

export default ReportIssue;
