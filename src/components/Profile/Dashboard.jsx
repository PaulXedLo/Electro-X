import { useState } from "react";
import ChangePassword from "./ChangePassword";
import EditInformation from "./EditInformation";
import profileIcon from "./images/profileImage.svg";
export default function Dashboard({ handleLogout }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="account_dashboard">
      <div className="account_menu">
        <img
          src={profileIcon}
          alt="The Icon of the account"
          className="profile_image"
        />
        <h1 className="username">{sessionStorage.getItem("username")}</h1>
        <ul className="options">
          <li
            onClick={() => handleOptionClick("Change Password")}
            className={selectedOption === "Change Password" ? "selected" : ""}
          >
            Change Password
          </li>
          <li
            onClick={() => handleOptionClick("Edit Information")}
            className={selectedOption === "Edit Information" ? "selected" : ""}
          >
            Edit Information
          </li>
          <a onClick={handleLogout} className="logout" href="/Electro-X">
            Log Out
          </a>
        </ul>
      </div>
      <div className="selected_component">
        {selectedOption === "Change Password" && <ChangePassword />}
        {selectedOption === "Edit Information" && <EditInformation />}
      </div>
    </div>
  );
}
