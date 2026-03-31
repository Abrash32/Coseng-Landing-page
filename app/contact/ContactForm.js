"use client";
import { useState } from "react";
import classes from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "", email: "", phone: "",
      company: "", service: "", message: "",
      consent: false,
    });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className={classes.contactSection}>

      {/* Left — contact info */}
      <div className={classes.contactLeft}>
        <p className={classes.tag}>Contact Information</p>
        <h2 className={classes.title}>Reach <em>Us Directly</em></h2>
        <p className={classes.desc}>
          We're based in the UK and work with clients across Nigeria and
          internationally. Reach out and we'll get back to you within 24 hours.
        </p>

        <div className={classes.infoItems}>
          <div className={classes.infoItem}>
            <div className={classes.infoIcon}>📍</div>
            <div>
              <h4>Location</h4>
              <p>Quorum Business Park, NE12 8BU, United Kingdom</p>
            </div>
          </div>
          <div className={classes.infoItem}>
            <div className={classes.infoIcon}>📞</div>
            <div>
              <h4>Phone</h4>
              <p>+44-778-010-5816</p>
            </div>
          </div>
          <div className={classes.infoItem}>
            <div className={classes.infoIcon}>✉️</div>
            <div>
              <h4>Email</h4>
              <p>info@coseng.co.uk</p>
            </div>
          </div>
          <div className={classes.infoItem}>
            <div className={classes.infoIcon}>🕐</div>
            <div>
              <h4>Working Hours</h4>
              <div className={classes.hours}>
                <span>Monday - Friday</span><span>9AM - 6PM</span>
                <span>Saturday</span><span>24 Hours</span>
                <span>Sunday</span><span>10AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className={classes.contactRight}>
        {submitted && (
          <div className={classes.successMsg}>
            ✓ Message sent! We'll get back to you within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.formTitle}>Send Us a Message</h2>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formField}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
          </div>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label>Phone (Optional)</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={classes.input}
              />
            </div>
            <div className={classes.formField}>
              <label>Company (Optional)</label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className={classes.input}
              />
            </div>
          </div>

          <div className={classes.formField}>
            <label>Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={classes.input}
            >
              <option value="">Select a service</option>
              <option value="tech">Tech Consulting</option>
              <option value="engineering">Engineering</option>
              <option value="properties">Properties</option>
              <option value="photography">Photography</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={classes.formField}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your project or enquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              className={classes.textarea}
            />
          </div>

          <div className={classes.consentRow}>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent">
              I agree to the Terms of Use and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className={classes.submitBtn}
            disabled={!formData.consent}
          >
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}