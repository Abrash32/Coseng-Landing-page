"use client";
import classes from "./contactSection.module.css";
import { FaLocationPin, FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactComponentForm from "./ContactForm";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function ContactSectionAllPages({ message }) {
  const path = usePathname();
  return (
    <div>
      {message && (
        <h1
          style={{
            padding: "1.5rem 0rem",
          }}
        >
          {message}
        </h1>
      )}
      <main
        className={
          path.startsWith("/contact")
            ? classes.ContactSectionMain
            : classes.allPagesContact
        }
      >
        <div className={classes.contactLeft}>
          {/* <h1>We are happy to get you started with our services</h1> */}
          <p>
            Have questions or ready to start using one of our services? Our team
            is here to assist you with any inquiries and ensure you achive your
            team/personal objective!
          </p>
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Location Icon">
              <FaLocationPin />
            </h1>
            <div>
              <h3>Location</h3>
              <p>Quorum BusIness Park, NE12 8BU</p>
            </div>
          </section>

          {/* Phone */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Phone Icon">
              <BsFillTelephoneFill />
            </h1>
            <div>
              <h3>Phone</h3>
              <p>+44-778-010-5816</p>
            </div>
          </section>

          {/* Email */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Email Icon">
              <MdEmail />
            </h1>
            <div>
              <h3>Email</h3>
              <p>contacts@coseng.co.uk</p>
            </div>
          </section>

          {/* Hours */}
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Clock Icon">
              <FaRegClock />
            </h1>
            <div>
              <h3>Hours</h3>

              <div>
                <p>Monday</p>
                <p>9AM - 6PM</p>
              </div>
              <div>
                <p>Tuesday</p>
                <p>9AM - 6PM</p>
              </div>
              <div>
                <p>Wednesday</p>
                <p>9AM - 6PM</p>
              </div>
              <div>
                <p>Thursday</p>
                <p>9AM - 6PM</p>
              </div>
              <div>
                <p>Friday</p>
                <p>9AM - 6PM</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>10AM - 3PM</p>
              </div>
            </div>
          </section>
        </div>

        <div className={classes.contactRight}>
          <ContactComponentForm caption="Reach out to us" />
        </div>
      </main>
    </div>
  );
}
