import React from "react";
import facebook from "./images/facebook_icon.svg";
import instagram from "./images/instagram_icon.svg";
import youtube from "./images/youtube_icon.svg";
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
        <a href="/Electro-X" rel="noopener noreferrer">
          <img
            src={facebook}
            alt="Facebook"
            className="contact_icon"
            style={{ width: "40px", height: "30px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
        <a href="/Electro-X" rel="noopener noreferrer">
          <img
            src={instagram}
            alt={"Instagram"}
            className="contact_icon"
            style={{ width: "40px", height: "30px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
        <a href="/Electro-X" rel="noopener noreferrer">
          <img
            src={youtube}
            alt="YouTube"
            className="contact_icon"
            style={{ width: "40px", height: "30px", margin: "0 10px" }}
          />
          <span style={{ color: "white", fontSize: "16px" }}>ElectroX</span>
        </a>
      </div>
    </div>
  );
}
