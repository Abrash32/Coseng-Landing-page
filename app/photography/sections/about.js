import classes from "./about.module.css";
import about2 from "../../../public/photography/images/image4.jpg";
import about1 from "../../../public/photography/images/imageu3.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div id="session-about" className={classes.about}>
      <div className={classes.aboutIntro}>
        <h4>Moments That Matter</h4>
        <h1>Looking to Capture Memories That Last a Lifetime?</h1>
        <p>
          Step into a world where every moment is artfully preserved. Our team
          at COSENG Limited is dedicated to delivering vibrant, timeless
          photography and videography that lets you relive your cherished
          moments again and again.
        </p>
        <div className={classes.cta}>
          <Link href="/contact" className={classes.ctaButton}>
            CONTACT US TODAY
          </Link>
        </div>
      </div>
      <div className={classes.imageSection}>
        <div className={classes.aboutImage}>
          <Image src={about1} fill alt="Capturing Moments with COSENG" />
        </div>
        <div className={classes.aboutImage}>
          <Image src={about2} fill alt="More About COSENG Photography" />
        </div>
      </div>
    </div>
  );
}
