import React, { useRef, useState } from "react";
import "./PopupForm.css";

const PopupForm = ({ isOpen, onClose }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current["name"].value.trim();
    const number = form.current["number"].value.trim();

    if (name.length < 2) {
      alert("Name must be at least 2 characters ❌");
      return;
    }

    if (!/^\d{10}$/.test(number)) {
      alert("Mobile number must be exactly 10 digits ❌");
      return;
    }

    setIsSending(true);

    // Simple submit -> console log
    console.log("Form Submitted:", {
      name,
      number,
      email: form.current["email"].value.trim()
    });

    setIsSending(false);
    form.current.reset();
    onClose(); // popup close
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Enquiry Form</h2>
        <form ref={form} onSubmit={handleSubmit} className="custom-form">
          <input type="text" name="name" placeholder="Enter your name" required minLength={2} />
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="text" name="number" placeholder="Enter Your Mobile Number" required pattern="\d{10}" maxLength={10} />
          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
