import classes from "./contactSection.module.css";
import ContactComponentPhotography from "../components/contactComponent/contact";

export default function ContactSection() {
  return (
    <main className={classes.ContactSectionMain}>
      <div className={classes.contactLeft}>
        <h1>Book Your Photography Session</h1>
        <p>
          Have questions or ready to book your next photography session? Our
          team is here to assist you with any inquiries and ensure your shoot is
          perfectly planned!
        </p>
      </div>
      <div className={classes.contactRight}>
        <ContactComponentPhotography />
      </div>
    </main>
  );
}
