"use client";
import React, { useRef } from 'react';
import classes from './ThreeDLogo.module.css';

export default function ThreeDLogo() {
  const wrapRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    wrapRef.current.style.setProperty('--mx', x + '%');
    wrapRef.current.style.setProperty('--my', y + '%');
  };

  const handleClick = () => {
    if (!wrapRef.current) return;
    const specular = wrapRef.current.querySelector(`.${classes.glassSpecular}`);
    if (specular) {
      specular.style.transition = 'opacity 0.12s';
      specular.style.opacity = '0.35';
      setTimeout(() => { specular.style.opacity = '1'; }, 220);
    }
  };

  return (
    <div 
      className={classes.logoWrap} 
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      role="img" 
      aria-label="COSENG Limited UK logo in liquid glass style"
    >
      <div className={classes.rippleRing}></div>
      <div className={classes.rippleRing}></div>
      <div className={classes.rippleRing}></div>

      <div className={classes.logoGlassContainer}>
        <div className={classes.glassFill}></div>
        <div className={classes.glassBorder}></div>
        <div className={classes.glassSpecular}></div>
        <div className={classes.glassShineBottom}></div>
        <div className={classes.glassDepth}></div>
        <div className={classes.glassInnerShadow}></div>

        <div className={classes.logoContent}>
          <div className={classes.logoMain}>
            <svg className={classes.logoSweep} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="navSweepGrad" x1="70" y1="5" x2="10" y2="65" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#80FF80" stopOpacity="0.95"/>
                  <stop offset="50%" stopColor="#22CC66" stopOpacity="0.90"/>
                  <stop offset="100%" stopColor="#0A8840" stopOpacity="0.80"/>
                </linearGradient>
                <linearGradient id="navSweepGrad2" x1="65" y1="0" x2="5" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#AAFFCC" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#22AA55" stopOpacity="0.85"/>
                </linearGradient>
              </defs>
              <path 
                d="M12 8 Q6 28 26 52 Q42 70 68 72"
                stroke="url(#navSweepGrad)"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              <path 
                d="M8 4 Q2 26 20 52 Q38 72 72 76"
                stroke="url(#navSweepGrad2)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <rect x="60" y="4" width="8" height="8" rx="2" fill="#88FF99" opacity="0.95" transform="rotate(20,64,8)"/>
              <rect x="68" y="16" width="6" height="6" rx="1.5" fill="#44EE88" opacity="0.85" transform="rotate(35,71,19)"/>
              <rect x="56" y="14" width="5" height="5" rx="1.5" fill="#AAFFCC" opacity="0.70" transform="rotate(10,58,16)"/>
              <rect x="72" y="28" width="5" height="5" rx="1.5" fill="#66FFAA" opacity="0.65" transform="rotate(-15,74,30)"/>
              <rect x="64" y="26" width="4" height="4" rx="1" fill="#CCFFDD" opacity="0.55" transform="rotate(25,66,28)"/>
            </svg>

            <div className={classes.logoTextBlock}>
              <span className={classes.cosengWord}>COSENG</span>
              <span className={classes.limitedUkWord}>LIMITED UK</span>
              <div className={classes.logoDivider}></div>
              <span className={classes.logoReg}>RC 13071013</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
