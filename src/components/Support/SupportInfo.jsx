import React, { useState } from "react";
import phoneIcon from "./images/call.png";
import facebookIcon from "../Home/images/facebook_icon.svg";
import youtubeIcon from "../Home/images/youtube_icon.svg";
import instagramIcon from "../Home/images/instagram_icon.svg";
export default function SupportInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpWith: "",
    hearAbout: "",
    message: "",
    agreeTerms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, helpWith, hearAbout, message, agreeTerms } =
      formData;
    if (
      !name ||
      !email ||
      !phone ||
      !helpWith ||
      !hearAbout ||
      !message ||
      !agreeTerms
    ) {
      alert("Please fill in all required fields");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="support__cards">
      <div className="supportinfobox">
        <h1 className="supportheader">Contact Us</h1>
        <form className="supportform" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="support_username">
              Enter name
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                id="support_username"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label for="support_email">
              Enter email
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                id="support_email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label for="support_phone">
              Enter phone number
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                id="support_phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="helpWith"
              value={formData.helpWith}
              onChange={handleChange}
              required
            >
              <option value="">What do you need help with?</option>
              <option value="option1">Setting Up</option>
              <option value="option2">Hardware Issues</option>
              <option value="option3">Other</option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleChange}
              required
            >
              <option value="">Where did you hear about us?</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="friends">Friends</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="supportsend">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheckbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I agree to the{" "}
                <strong>
                  <span class="tos">terms and conditions</span>
                </strong>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {showSuccess && <div className="success-popup">Successfully sent</div>}
      </div>
      <div className="support_secondcard">
        <img src={phoneIcon} alt="Icon of a phone" />
        <h2 className="support_secondcard_phoneheader">
          You can always call us at
        </h2>
        <h2 className="support_secondcard_phonenumber">
          <span>0</span>
          <span>9</span>
          <span>8</span>
          <span>-</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>-</span>
          <span>8</span>
          <span>9</span>
          <span>0</span>
          <span>9</span>
        </h2>
        <h2 className="support_secondcard_emailheader">Or you can write at:</h2>
        <h2 className="support_secondcard_email">electroX@support.fill.com</h2>
        <div className="support_secondcard_socials">
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={instagramIcon} alt="Instagram Icon" />
          <img src={youtubeIcon} alt="Youtube icon" />
        </div>
      </div>
    </div>
  );
}
