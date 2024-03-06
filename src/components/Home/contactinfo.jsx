import React from "react";
export default function ContactInfo() {
  return (
    <div
      className="contact_info"
      style={{ backgroundColor: "black", padding: "20px", textAlign: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        <a href="/" rel="noopener noreferrer">
          <img
            src="./facebook_icon.svg"
            alt="Facebook"
            className="contact_icon"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
        <a href="/" rel="noopener noreferrer">
          <img
            src="./instagram_icon.svg"
            alt="Instagram"
            className="contact_icon"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
        <a href="/" rel="noopener noreferrer">
          <img
            src="./youtube_icon.svg"
            alt="YouTube"
            className="contact_icon"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
      </div>
    </div>
  );
}
