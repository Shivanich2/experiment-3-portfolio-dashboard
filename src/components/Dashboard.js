import React from "react";

function Dashboard({ title }) {
  return (
    <div className="dashboard">
      <h2 style={{ fontSize: "32px", fontFamily: "'Raleway', sans-serif", fontWeight: "800", color: "#001F3F", marginBottom: "35px" }}>{title}</h2>
      <div className="card-container">
        <div className="card">
          <h3>🤖 AI/ML</h3>
          <p className="stat">Advanced</p>
          <p>Machine Learning Focus</p>
        </div>
        <div className="card">
          <h3>💻 Development</h3>
          <p className="stat">Full Stack</p>
          <p>Web & Python</p>
        </div>
        <div className="card">
          <h3>👥 Leadership</h3>
          <p className="stat">NSS</p>
          <p>Community Service</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
