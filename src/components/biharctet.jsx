import React from "react";

const ComingSoon = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "50px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 40px rgba(59,130,246,0.3)",
        }}
      >
        <div style={{ fontSize: "70px", marginBottom: "20px" }}>🚀</div>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#60a5fa",
          }}
        >
          Test Coming Soon
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          This mock test is currently under maintenance and content updates are
          in progress.
        </p>

        <p
          style={{
            marginTop: "15px",
            fontSize: "1rem",
            color: "#94a3b8",
          }}
        >
          We are adding new questions, improving performance, and enhancing the
          user experience.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "inline-block",
            padding: "12px 30px",
            borderRadius: "50px",
            background: "#2563eb",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ACTIVATING SOON
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "0.9rem",
            color: "#64748b",
          }}
        >
          Thank you for your patience.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;