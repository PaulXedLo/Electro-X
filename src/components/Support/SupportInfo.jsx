import React, { useState } from "react";

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
    <div className="supportinfobox">
      <h1 className="supportheader">Contact Us</h1>
      <form className="supportform" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
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
  );
}
