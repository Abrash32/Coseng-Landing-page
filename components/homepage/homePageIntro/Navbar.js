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
      src="/image/coseng_logo_3d.html"
      alt="COSENG Logo"
      width={100}
      height={10}
      style={{ objectFit: "contain" }}
    />
  </div>
</Link>
</div>

      {/* Desktop links */}
      <ul className={classes.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/reviews">Reviews</Link></li>
        
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
      <Link href="/contact" className={classes.btnWrap} aria-label="Contact us">
        <div className={classes.rippleRing}></div>
        <div className={classes.rippleRing}></div>
        <div className={classes.rippleRing}></div>
        <button 
          className={classes.liquidBtn} 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
            const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
            e.currentTarget.style.setProperty('--mx', x + '%');
            e.currentTarget.style.setProperty('--my', y + '%');
          }}
          tabIndex="-1"
        >
          <div className={classes.glassBody}>
            <div className={classes.glassFill}></div>
            <div className={classes.glassBorder}></div>
            <div className={classes.glassSpecular}></div>
            <div className={classes.glassShineBottom}></div>
            <div className={classes.glassDepth}></div>
          </div>
          <span className={classes.btnContent}>
            Contact Us
          </span>
        </button>
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
          <li><Link href="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
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
