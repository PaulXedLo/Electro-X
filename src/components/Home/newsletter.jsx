import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  function handleSubscribe() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email address");
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }
  return (
    <div className="newsletter">
      <h1>Subscribe to our newsletter</h1>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button
        type="button"
        className="newslettersubscribe"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
      {showSuccess && (
        <div className="success-popup">Successfully subscribed</div>
      )}
    </div>
  );
}
