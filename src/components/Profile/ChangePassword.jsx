import { useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    const storedPassword = sessionStorage.getItem("password");
    if (currentPassword !== storedPassword) {
      setError("Current password is incorrect");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match");
      return;
    }
    sessionStorage.setItem("password", newPassword);
    setPasswordChanged(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  return (
    <div className="change_password_container">
      <h2 className="change_password_heading">Change Password</h2>
      <div className="change_password_form">
        <input
          type="password"
          className="password_input"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          className="password_input"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="password_input"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        {error && <p className="error_message">{error}</p>}
        {passwordChanged && (
          <p className="success_message">Password changed successfully!</p>
        )}
        <button
          className="change_password_button"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>
    </div>
  );
}
