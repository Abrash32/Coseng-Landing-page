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
      height={20}
      style={{ objectFit: "contain" }}
    />
  </div>
</Link>
</div>

      {/* Desktop links */}
      <ul className={classes.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#reviews">Reviews</Link></li>
        
        <li className={classes.dropdown}>
          <Link href="#services" className={classes.dropbtn}>Services</Link>
          <div className={classes.dropdownContent}>
            <Link href="/TechConsult">Tech Consulting</Link>
            <Link href="/engineering">Engineering</Link>
            {/* <Link href="#property">Property Management</Link> */}
            <Link href="/photography">Photography</Link>
          </div>
        </li>
        {/* <li><Link href="#cta">Contact</Link></li> */}
        {/* <li><Link href="/contact">Contact</Link></li> */}
        <li><Link href="/about">About Us</Link></li>
      </ul>

      {/* CTA Button */}
      <Link href="/contact" className={classes.navCta}>
        Contact Us
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
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
          <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className={classes.mobileDropdown}>
            <span className={classes.mobileDropbtn}>Services</span>
            <ul className={classes.mobileDropdownContent}>
              <li><Link href="/TechConsult" onClick={() => setMenuOpen(false)}>Tech Consulting</Link></li>
              <li><Link href="/engineering" onClick={() => setMenuOpen(false)}>Engineering</Link></li>
              {/* <li><Link href="/property" onClick={() => setMenuOpen(false)}>Property Management</Link></li> */}
              <li><Link href="/photography" onClick={() => setMenuOpen(false)}>Photography</Link></li>
            </ul>
          </li>
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