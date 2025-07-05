import React, { useState } from "react";
import "./Contact.css";
import nav_underline from "../../assets/nav_underline.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "db528bc8-fa0a-43db-86c5-6463da7c00ad"); // ✅ Replace with your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div id="contact" className="Contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={nav_underline} alt="underline" />
      </div>

      <div className="contact-section">
        <div className="Contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently open to work, so feel free to send me a message about anything
            that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>akashhede360@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 9404024512</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Ambegaon Pathar, Pune-46</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" placeholder="Enter your message" required />

          <button type="submit" className="Contact-Submit">Submit Now</button>

          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
