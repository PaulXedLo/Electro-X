import { useState, useEffect } from "react";

export default function EditInformation() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email") || "";
    const storedUsername = sessionStorage.getItem("username") || "";
    const storedFirstName = sessionStorage.getItem("firstName") || "";
    const storedLastName = sessionStorage.getItem("lastName") || "";
    const storedAddress = sessionStorage.getItem("address") || "";
    const storedPostalCode = sessionStorage.getItem("postalCode") || "";
    setEmail(storedEmail);
    setUsername(storedUsername);
    setFirstName(storedFirstName);
    setLastName(storedLastName);
    setAddress(storedAddress);
    setPostalCode(storedPostalCode);
  }, []);

  const handleSetInformation = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("postalCode", postalCode);
    setSuccessMessage("Information set successfully!");
  };

  return (
    <div className="change_password_container">
      <h2 className="change_password_heading">Edit Information</h2>
      <div className="change_password_form">
        <input
          type="email"
          className="password_input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="password_input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="password_input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="password_input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="password_input"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="password_input"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        {successMessage && <p className="success_message">{successMessage}</p>}
        <button
          className="change_password_button"
          onClick={handleSetInformation}
        >
          Set Information
        </button>
      </div>
    </div>
  );
}
