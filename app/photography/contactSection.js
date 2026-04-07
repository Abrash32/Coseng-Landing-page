"use client";
import { useState } from "react";
import classes from "./contactSection.module.css";
import { FaLocationPin, FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const servicesOffered = [
  "Graduation Coverage",
  "Wedding Coverage",
  "Birthday Party Coverage",
  "Anniversaries",
  "Group Photography",
  "Education Events",
  "Photo Enlargement",
  "Photoshop Services",
  "Video Editing",
  "Photo Editing",
  "Other",
];

export default function BookContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
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
      name: "", phone: "", email: "",
      subject: "", message: "", consent: false,
    });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <main className={classes.ContactSectionMain}>
      <div className={classes.contactLeft}>
        <h1>Book Your Photography Session</h1>
        <p>
          Have questions or ready to book your next photography session? Our
          team is here to assist you with any inquiries and ensure your shoot
          is perfectly planned!
        </p>

        <section className={classes.photoBookingIcons}>
          <h2><FaLocationPin /></h2>
          <div>
            <h3>Location</h3>
            <p>Quorum Business Park, NE12 8BU</p>
          </div>
        </section>

        <section className={classes.photoBookingIcons}>
          <h2><BsFillTelephoneFill /></h2>
          <div>
            <h3>Phone</h3>
            <p>+44-778-010-5816</p>
          </div>
        </section>

        <section className={classes.photoBookingIcons}>
          <h2><MdEmail /></h2>
          <div>
            <h3>Email</h3>
            <p>contacts@coseng.co.uk</p>
          </div>
        </section>

        <section className={classes.photoBookingIcons}>
          <h2><FaRegClock /></h2>
          <div>
            <h3>Hours</h3>
            <div className={classes.hoursGrid}>
              <span>Monday - Friday</span><span>9AM - 6PM</span>
              <span>Saturday</span><span>24 Hours</span>
              <span>Sunday</span><span>10AM - 5PM</span>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.contactRight}>
        {submitted && (
          <div className={classes.successMsg}>
            ✓ Booking request sent! We&apos;ll be in touch soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className={classes.contactForm}>
          <h2>Book Your Session</h2>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label>Name</label>
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
          </div>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formField}>
              <label>Service</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={classes.input}
              >
                <option value="">Select a service</option>
                {servicesOffered.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={classes.formField}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your shoot..."
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
            Submit Booking
          </button>
        </form>
      </div>
    </main>
  );
}