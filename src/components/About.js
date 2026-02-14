import React from "react";

function About() {
  return (
    <div className="page">
      <h1 style={{ fontSize: "56px", marginBottom: "15px" }}>About Me</h1>
      <p style={{ fontSize: "18px", color: "#001F3F", lineHeight: "1.8", marginBottom: "50px", fontFamily: "'Open Sans', sans-serif" }}>
        I'm an AIML (Artificial Intelligence and Machine Learning) student at Chandigarh University, 
        passionate about leveraging technology to solve real-world problems. As a leader in the National Service 
        Scheme (NSS), I'm committed to community service and making a positive social impact.
      </p>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "35px", marginTop: "50px", marginBottom: "50px" }}>
        <div style={{ 
          padding: "40px", 
          background: "#f0f6ff",
          borderRadius: "20px", 
          boxShadow: "0px 8px 25px rgba(0, 31, 63, 0.08)",
          borderLeft: "6px solid #0052CC",
          transition: "all 0.3s ease"
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
      <h2 style={{ 
          padding: "20px 30px", 
          background: "#0052CC", 
          color: "white", 
          borderRadius: "15px", 
          display: "inline-block",
          marginBottom: "25px", 
          fontSize: "28px", 
          fontFamily: "'Raleway', sans-serif", 
          fontWeight: "700" 
        }}>🎓 Academic Focus</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
            Specializing in Artificial Intelligence and Machine Learning. Focused on learning and implementing 
            modern algorithms, deep learning, and data science practices to develop intelligent solutions.
          </p>
        </div>
        
        <div style={{ 
          padding: "40px", 
          background: "#fef5f0",
          borderRadius: "20px", 
          boxShadow: "0px 8px 25px rgba(0, 31, 63, 0.08)",
          borderLeft: "6px solid #DC2626",
          transition: "all 0.3s ease"
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
          <h2 style={{ color: "#DC2626", marginBottom: "20px", fontSize: "28px", fontFamily: "'Raleway', sans-serif", fontWeight: "700" }}>🌟 Leadership & Community</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
            As an NSS leader at Chandigarh University, I organize and lead community service initiatives, 
            environmental conservation projects, and social awareness programs.
          </p>
        </div>
      </div>
      
      <div style={{ 
        marginTop: "50px", 
        padding: "50px", 
        background: "#f0f6ff", 
        borderRadius: "25px",
        boxShadow: "0px 12px 35px rgba(0, 31, 63, 0.08)",
        color: "#001F3F",
        border: "2px solid #e8eef5",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        <h2 style={{ 
          position: "relative",
          zIndex: 1,
          marginBottom: "25px", 
          fontSize: "32px",
          fontFamily: "'Raleway', sans-serif",
          fontWeight: "800",
          letterSpacing: "0.5px",
          color: "#001F3F"
        }}>💡 Vision</h2>
        <p style={{ 
          position: "relative",
          zIndex: 1,
          fontSize: "18px", 
          lineHeight: "1.9", 
          color: "#001F3F",
          fontFamily: "'Open Sans', sans-serif"
        }}>
          To combine my technical expertise in AI/ML with my passion for social responsibility to create 
          innovative solutions that benefit both society and technology. I believe in continuous learning, 
          collaboration, and using technology for good.
        </p>
      </div>
    </div>
  );
}

export default About;
