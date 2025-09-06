import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-section">
      <div className="bg-image"></div>
      <div className="form-container">
        <h2>Get in Touch</h2>
        <form>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Address" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
