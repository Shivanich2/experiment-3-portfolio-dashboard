import React from "react";

function DashboardPage() {
  const skills = [
    { icon: "🤖", title: "Machine Learning", value: "Advanced", subtitle: "TensorFlow, Scikit-learn" },
    { icon: "🐍", title: "Python", value: "Expert", subtitle: "Data Science & Automation" },
    { icon: "📊", title: "Data Analysis", value: "Advanced", subtitle: "Pandas, NumPy, Matplotlib" },
    { icon: "💻", title: "Web Development", value: "Intermediate", subtitle: "React, JavaScript" },
  ];

  const projects = [
    { name: "AI Chatbot", description: "NLP-based conversational AI" },
    { name: "Image Classification", description: "Deep Learning model for image recognition" },
    { name: "Community Portal", description: "NSS event management platform" },
    { name: "Data Visualization", description: "Interactive dashboards for analysis" },
  ];

  return (
    <div className="page">
      <h1>Skills & Projects</h1>
      <p style={{ marginBottom: "40px", fontSize: "18px", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
        Exploring the intersection of AI/ML and community development through practical projects and continuous learning.
      </p>
      
      <h2 style={{ background: "none", color: "#001F3F", fontFamily: "'Raleway', sans-serif", fontWeight: "800", marginTop: "50px", marginBottom: "35px", fontSize: "32px" }}>🎯 Core Skills</h2>
      <div className="dashboard">
        <div className="card-container">
          {skills.map((skill, index) => (
            <div key={index} className="card" style={{ animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both` }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p className="stat">{skill.value}</p>
              <p>{skill.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ background: "none", color: "#001F3F", fontFamily: "'Raleway', sans-serif", fontWeight: "800", marginTop: "60px", marginBottom: "35px", fontSize: "32px" }}>📁 Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            padding: "30px",
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(0, 31, 63, 0.08)",
            transition: "all 0.3s ease",
            borderTop: "4px solid #0052CC",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0px 15px 40px rgba(0, 31, 63, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0px 8px 25px rgba(0, 31, 63, 0.08)";
          }}
          >
            <h3 style={{ color: "#0052CC", marginBottom: "12px", fontSize: "20px", fontFamily: "'Raleway', sans-serif", fontWeight: "700" }}>{project.name}</h3>
            <p style={{ color: "#001F3F", lineHeight: "1.6", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>{project.description}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "60px",
        padding: "50px",
        background: "#f0f6ff",
        borderRadius: "25px",
        boxShadow: "0px 12px 35px rgba(0, 31, 63, 0.08)",
        color: "#001F3F",
        position: "relative",
        overflow: "hidden",
        border: "2px solid #e8eef5"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        <h2 style={{ color: "#001F3F", marginBottom: "25px", fontSize: "32px", fontFamily: "'Raleway', sans-serif", fontWeight: "800", position: "relative", zIndex: 1, letterSpacing: "0.5px" }}>🌟 Highlights</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "25px", position: "relative", zIndex: 1 }}>
          <div style={{ padding: "25px", background: "#ffffff", borderRadius: "15px", border: "2px solid #e8eef5" }}>
            <p style={{ color: "#001F3F", margin: "0 0 12px 0", fontSize: "14px", fontFamily: "'Open Sans', sans-serif" }}>Learning Focus</p>
            <p style={{ fontSize: "22px", fontWeight: "800", color: "#0052CC", margin: 0, fontFamily: "'Raleway', sans-serif" }}>AI/ML</p>
          </div>
          <div style={{ padding: "25px", background: "#ffffff", borderRadius: "15px", border: "2px solid #e8eef5" }}>
            <p style={{ color: "#001F3F", margin: "0 0 12px 0", fontSize: "14px", fontFamily: "'Open Sans', sans-serif" }}>Leadership Role</p>
            <p style={{ fontSize: "22px", fontWeight: "800", color: "#DC2626", margin: 0, fontFamily: "'Raleway', sans-serif" }}>NSS Leader</p>
          </div>
          <div style={{ padding: "25px", background: "#ffffff", borderRadius: "15px", border: "2px solid #e8eef5" }}>
            <p style={{ color: "#001F3F", margin: "0 0 12px 0", fontSize: "14px", fontFamily: "'Open Sans', sans-serif" }}>Community</p>
            <p style={{ fontSize: "22px", fontWeight: "800", color: "#0052CC", margin: 0, fontFamily: "'Raleway', sans-serif" }}>Chandigarh University</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
