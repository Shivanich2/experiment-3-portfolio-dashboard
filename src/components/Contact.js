import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="page">
      <h1>Get In Touch</h1>
      <p>Feel free to reach out with any questions, collaboration opportunities, or just to connect!</p>
      
      <div style={{ maxWidth: "600px", marginTop: "40px" }}>
        <form onSubmit={handleSubmit} style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 8px 25px rgba(0, 31, 63, 0.08)",
          border: "2px solid #e8eef5"
        }}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
              Name
            </label>
            <input 
              type="text" 
              placeholder="Your name" 
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e8eef5",
                borderRadius: "8px",
                fontSize: "14px",
                transition: "all 0.3s ease",
                fontFamily: "'Open Sans', sans-serif",
                color: "#001F3F"
              }}
              onFocus={(e) => e.target.style.borderColor = "#0052CC"}
              onBlur={(e) => e.target.style.borderColor = "#e8eef5"}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
              Email
            </label>
            <input 
              type="email" 
              placeholder="your.email@example.com" 
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e8eef5",
                borderRadius: "8px",
                fontSize: "14px",
                transition: "all 0.3s ease",
                fontFamily: "'Open Sans', sans-serif",
                color: "#001F3F"
              }}
              onFocus={(e) => e.target.style.borderColor = "#0052CC"}
              onBlur={(e) => e.target.style.borderColor = "#e8eef5"}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#001F3F", fontFamily: "'Open Sans', sans-serif" }}>
              Message
            </label>
            <textarea 
              placeholder="Your message here..." 
              rows="5"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e8eef5",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "'Open Sans', sans-serif",
                resize: "vertical",
                transition: "all 0.3s ease",
                color: "#001F3F"
              }}
              onFocus={(e) => e.target.style.borderColor = "#0052CC"}
              onBlur={(e) => e.target.style.borderColor = "#e8eef5"}
            />
          </div>

          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#0052CC",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "'Raleway', sans-serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0px 8px 16px rgba(0, 82, 204, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0px 12px 24px rgba(0, 82, 204, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0px 8px 16px rgba(0, 82, 204, 0.3)";
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
