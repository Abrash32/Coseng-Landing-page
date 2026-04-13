"use client";
import { useActionState } from "react";
import classes from "./contactSection.module.css";
import { FaLocationPin, FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { submitPhotographyBookingForm } from "@/lib/submissionForms/submitPhotographyBookingForm";

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
  const [state, formAction, isPending] = useActionState(submitPhotographyBookingForm, {
    status: "idle",
    message: "",
  });

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
        {state.status === "successful" && (
          <div className={classes.successMsg}>
            ✓ {state.message}
          </div>
        )}
        {state.status === "failed" && (
          <div className={`${classes.successMsg} ${classes.errorMsg}`} style={{ backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca' }}>
            ✕ {state.message}
          </div>
        )}

        <form action={formAction} className={classes.contactForm}>
          <h2>Book Your Session</h2>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formField}>
              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className={classes.input}
              />
            </div>
          </div>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                className={classes.input}
              />
            </div>
            <div className={classes.formField}>
              <label htmlFor="subject">Service</label>
              <select
                name="subject"
                id="subject"
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
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us about your shoot..."
              required
              className={classes.textarea}
            />
          </div>

          <div className={classes.consentRow}>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              required
            />
            <label htmlFor="consent">
              I agree to the Terms of Use and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className={classes.submitBtn}
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </main>
  );
}
