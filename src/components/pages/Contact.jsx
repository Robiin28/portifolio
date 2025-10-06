import React, { useState } from "react";
import { AddLocationAltOutlined, PhoneIphone, EmailOutlined } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import "./css/contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: "", type: "" });
    }, 4000); // hide after 4 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rstnp1e",      // Service ID
        "template_t442zvj",     // Template ID
        formData,
        "KoVs2a9Bbpi0RlTeo"    // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          showToast("✅ Message sent successfully!", "success");
          setFormData({ user_name: "", user_email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          showToast("❌ Failed to send message. Try emailing me directly at robiiihailuu@gmail.com", "error");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <h2 className="heading" data-aos="zoom-in-down">Contact Me</h2>

      <div className="contact">
        <div className="container2">
          <div className="content">
            <div className="left">
              <div className="box" data-aos="zoom-in">
                <i><AddLocationAltOutlined /></i>
                <p>Ethiopia / Addis Ababa</p>
                <p>Gofa</p>
              </div>
              <div className="box" data-aos="zoom-in">
                <i><PhoneIphone /></i>
                <p>+251-986-991447</p>
                <p>Mon - Fri, 9am - 5pm</p>
              </div>
              <div className="box" data-aos="zoom-in">
                <i><EmailOutlined /></i>
                <p>robiiihailuu@gmail.com</p>
                <p>I will reply within 24 hours</p>
              </div>
            </div>

            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    data-aos="flip-left"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    data-aos="flip-right"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  data-aos="flip-up"
                  required
                />

                <textarea
                  placeholder="Message"
                  name="message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  data-aos="flip-down"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="button"
                  data-aos="zoom-in-up"
                  disabled={loading}
                  style={{ cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast.visible && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "15px 25px",
            borderRadius: "8px",
            backgroundColor: toast.type === "success" ? "#4BB543" : "#FF4C4C",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
            animation: "fadein 0.5s, fadeout 0.5s 3.5s",
          }}
        >
          {toast.message}
        </div>
      )}

      <div className="bot"></div>
    </>
  );
};
