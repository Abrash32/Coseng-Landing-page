"use client";
import { useActionState } from "react";
import classes from "./ContactForm.module.css";
import { submitContactForm } from "@/lib/submissionForms/submitContactForm";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: "idle",
    message: "",
  });

  return (
    <section className={classes.contactSection}>
      {/* Left — contact info */}
      <div className={classes.contactLeft}>
        <p className={classes.tag}>Contact Information</p>
        <h2 className={classes.title}>Reach <em>Us Directly</em></h2>
        <p className={classes.desc}>
          We&apos;re based in the UK and work with clients across Nigeria and
          internationally. Reach out and we&apos;ll get back to you within 24 hours.
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

        <form action={formAction} className={classes.form}>
          <h2 className={classes.formTitle}>Send Us a Message</h2>

          <div className={classes.formRow}>
            <div className={classes.formField}>
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className={classes.input}
              />
            </div>
          </div>

          <div className={classes.formRow}>
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
            <div className={classes.formField}>
              <label htmlFor="company">Company (Optional)</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
                className={classes.input}
              />
            </div>
          </div>

          <div className={classes.formField}>
            <label htmlFor="service">Service Interested In</label>
            <select
              name="service"
              id="service"
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

          {/* Hidden fields if needed by schema but not in UI */}
          <input type="hidden" name="category" value="general" />
          <input type="hidden" name="country" value="UK/Nigeria" />

          <div className={classes.formField}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell us about your project or enquiry..."
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
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
