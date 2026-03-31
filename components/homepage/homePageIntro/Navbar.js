"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
     <div className={classes.logo}>
  <Link href="/">
  <div className={classes.logo}>
    <Image
      src="/images/cosenglogo6.png"
      alt="COSENG Logo"
      width={120}
      height={40}
      style={{ objectFit: "contain" }}
    />
  </div>
</Link>
</div>

      {/* Desktop links */}
      <ul className={classes.navLinks}>
        <li><Link href="#reviews">Reviews</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#Services">Services</Link></li>
        {/* <li><Link href="#cta">Contact</Link></li> */}
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* CTA Button */}
      <Link href="mailto:contact@coseng.co.uk" className={classes.navCta}>
        Get in Touch
      </Link>

      {/* Mobile hamburger */}
      <button
        className={classes.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={classes.mobileMenu}>
          <li><Link href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
          <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="#cta" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link href="mailto:contact@coseng.co.uk" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}