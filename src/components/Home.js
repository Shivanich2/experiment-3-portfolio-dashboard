import React from "react";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className="page">
      <div style={{
        marginBottom: "80px",
        padding: "60px",
        background: "#f0f6ff",
        borderRadius: "25px",
        boxShadow: "0px 12px 35px rgba(0, 31, 63, 0.08)",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "60px",
        alignItems: "center",
        border: "2px solid #e8eef5"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 10% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />
        
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
          <div style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 100%)",
            padding: "6px",
            boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.25), inset 0px 2px 10px rgba(255, 255, 255, 0.5)"
          }}>
            <img 
              src="/professional photo.jpg" 
              alt="Shivani Choudhary" 
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                border: "3px solid white"
              }}
            />
          </div>
          <div style={{
            width: "150px",
            height: "150px",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "15px",
            padding: "12px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}>
            <img 
              src="/image.png" 
              alt="NSS Logo" 
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              }}
            />
            <p style={{
              marginTop: "8px",
              fontSize: "10px",
              fontWeight: "700",
              color: "#DC2626",
              textAlign: "center",
              margin: 0,
              fontFamily: "'Poppins', sans-serif"
            }}>NSS Leader</p>
          </div>
        </div>
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            fontSize: "56px", 
            marginBottom: "10px", 
            color: "#001F3F",
            fontFamily: "'Raleway', 'Segoe UI', sans-serif",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            textShadow: "none"
          }}>Shivani Choudhary</h1>
          
          <p style={{ 
            fontSize: "28px", 
            fontWeight: "700", 
            color: "#0052CC", 
            marginBottom: "8px",
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: "0.5px"
          }}>AIML Student</p>
          
          <p style={{ 
            fontSize: "22px", 
            color: "#001F3F", 
            marginBottom: "10px",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600"
          }}>NSS Leader at Chandigarh University</p>
          
          <div style={{ 
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #FFD700, #FFFFFF)",
            borderRadius: "2px",
            marginBottom: "25px"
          }} />
          
          <div style={{ 
            marginTop: "25px", 
            fontSize: "16px", 
            color: "#001F3F", 
            lineHeight: "1.9",
            fontFamily: "'Open Sans', sans-serif"
          }}>
            <p style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>✨</span>
              Passionate about AI/ML and community service
            </p>
            <p style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>🚀</span>
              Dedicated to cutting-edge technologies
            </p>
            <p style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>💙</span>
              Making positive social impact through NSS
            </p>
          </div>
        </div>
      </div>
      <Dashboard title="Welcome" />
    </div>
  );
}

export default Home;
