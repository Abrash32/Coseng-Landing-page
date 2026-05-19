import Link from "next/link";
import classes from "./services.module.css";
import { getFromDatabase } from "@/lib/getFromDatabase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Services - COSENG Limited",
  description:
    "COSENG delivers comprehensive services across Tech Consulting, Engineering, Real Estate, Photography, and Professional Training.",
};

export default async function ServicesPage() {
  // Fetch services from DB if needed to dynamically link, though we have main service categories fixed.
  let services = [];
  try {
    services = await getFromDatabase("services");
  } catch (err) {
    console.error("Failed to fetch services", err);
  }

  // Find slugs dynamically if they exist, or fallback to known static routes
  const techSlug = services.find(s => s.slug === "software-technology-services") ? "/services/software-technology-services" : "/TechConsult";
  const engSlug = services.find(s => s.slug === "energy-support-services") ? "/services/energy-support-services" : "/engineering";
  const propSlug = services.find(s => s.slug === "asset-and-facility-management") ? "/services/asset-and-facility-management" : "/property";

  return (
    <main className={classes.page}>
      {/* ── HERO ── */}
      <section className={classes.hero}>
        <div className={classes.heroInner}>
          <span className={classes.eyebrow}>Our Expertise</span>
          <h1 className={classes.heroTitle}>
            Solutions that <em>Empower</em>
          </h1>
          <span className={classes.heroSub}>
            From cutting-edge tech and sustainable engineering to premium visual storytelling, COSENG delivers excellence across industries.
          </span>

          <nav className={classes.heroNav} aria-label="Service categories">
            <Link href="#tech" className={classes.heroNavBtn}>💻 Tech Consulting</Link>
            <Link href="#engineering" className={classes.heroNavBtn}>🌿 Engineering</Link>
            <Link href="#properties" className={classes.heroNavBtn}>🏢 Properties</Link>
            <Link href="#photography" className={classes.heroNavBtn}>📷 Photography</Link>
            <Link href="#training" className={classes.heroNavBtn}>🎓 Training</Link>
          </nav>
        </div>
      </section>

      {/* ── 1. TECH CONSULTING (Dark) ── */}
      <section id="tech" className={classes.bandDark}>
        <div className={classes.bandInner}>
          <div className={classes.serviceGrid}>
            <div className={classes.serviceText}>
              <span className={classes.serviceLabelLight}>01 — Innovation</span>
              <div className={classes.serviceIconRow}>
                <div className={`${classes.serviceIcon} ${classes.iconDark}`}>💻</div>
              </div>
              <h2 className={classes.serviceHeading}>Tech Consulting & Software</h2>
              <p className={classes.serviceBody}>
                Empowering businesses through cutting-edge technology, digital transformation, and strategic IT guidance tailored for growth. We build scalable, secure, and intelligent solutions.
              </p>
              
              <ul className={classes.featureList}>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Custom Software Development & Architecture</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Data Analytics & Business Intelligence</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Cloud Solutions & Digital Transformation</span>
                </li>
              </ul>

              <Link href={techSlug} className={`${classes.serviceLink} ${classes.linkDark}`}>
                Explore Tech Services →
              </Link>
            </div>
            
            <div className={`${classes.visualPanel} ${classes.visualPanelDark}`}>
              <div className={classes.visualPanelInner}>
                <div className={classes.visualBigIcon}>📊</div>
                <div className={classes.miniCards}>
                  <div className={`${classes.miniCard} ${classes.miniCardDark}`}>
                    <span className={classes.miniCardIcon}>⚙️</span>
                    <span className={classes.miniCardTitle}>SaaS Platforms</span>
                    <span className={classes.miniCardDesc}>Scalable web and mobile apps</span>
                  </div>
                  <div className={`${classes.miniCard} ${classes.miniCardDark}`}>
                    <span className={classes.miniCardIcon}>📈</span>
                    <span className={classes.miniCardTitle}>Data Insights</span>
                    <span className={classes.miniCardDesc}>Dashboards & predictive models</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ENGINEERING & BIOGAS (Light) ── */}
      <section id="engineering" className={classes.bandLight}>
        <div className={classes.bandInner}>
          <div className={`${classes.serviceGrid} ${classes.serviceGridReverse}`}>
            <div className={classes.serviceText}>
              <span className={classes.serviceLabel}>02 — Sustainability</span>
              <div className={classes.serviceIconRow}>
                <div className={`${classes.serviceIcon} ${classes.iconLight}`}>🌿</div>
              </div>
              <h2 className={classes.serviceHeading}>Engineering & Biogas</h2>
              <p className={classes.serviceBody}>
                Pioneering sustainable energy solutions and environmental engineering for a cleaner, more resilient future. We specialize in converting waste to energy and optimizing resource utilization.
              </p>

              <ul className={classes.featureList}>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Biogas Plant Design & Construction</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Environmental Impact Assessments</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Renewable Energy Consulting</span>
                </li>
              </ul>

              <Link href={engSlug} className={`${classes.serviceLink} ${classes.linkLight}`}>
                Explore Engineering →
              </Link>
            </div>

            <div className={`${classes.visualPanel} ${classes.visualPanelLight}`}>
              <div className={classes.visualPanelInner}>
                <div className={classes.visualBigIcon}>⚡</div>
                <div className={classes.miniCards}>
                  <div className={`${classes.miniCard} ${classes.miniCardLight}`}>
                    <span className={classes.miniCardIcon}>♻️</span>
                    <span className={classes.miniCardTitle}>Zero Waste</span>
                    <span className={classes.miniCardDesc}>Sustainable organic recycling</span>
                  </div>
                  <div className={`${classes.miniCard} ${classes.miniCardLight}`}>
                    <span className={classes.miniCardIcon}>🏭</span>
                    <span className={classes.miniCardTitle}>Infrastructure</span>
                    <span className={classes.miniCardDesc}>Civil & structural expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROPERTIES (Dark) ── */}
      <section id="properties" className={classes.bandDark}>
        <div className={classes.bandInner}>
          <div className={classes.serviceGrid}>
            <div className={classes.serviceText}>
              <span className={classes.serviceLabelLight}>03 — Real Estate</span>
              <div className={classes.serviceIconRow}>
                <div className={`${classes.serviceIcon} ${classes.iconDark}`}>🏢</div>
              </div>
              <h2 className={classes.serviceHeading}>Properties & Asset Management</h2>
              <p className={classes.serviceBody}>
                Strategic real estate management and property development that builds lasting value. We handle portfolios across residential and commercial sectors with a focus on maximizing ROI.
              </p>

              <ul className={classes.featureList}>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Comprehensive Facility Management</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Property Development & Valuation</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Real Estate Investment Consulting</span>
                </li>
              </ul>

              <Link href={propSlug} className={`${classes.serviceLink} ${classes.linkDark}`}>
                Explore Properties →
              </Link>
            </div>

            <div className={`${classes.visualPanel} ${classes.visualPanelDark}`}>
              <div className={classes.visualPanelInner}>
                <div className={classes.visualBigIcon}>🏗️</div>
                <div className={classes.miniCards}>
                  <div className={`${classes.miniCard} ${classes.miniCardDark}`}>
                    <span className={classes.miniCardIcon}>🏘️</span>
                    <span className={classes.miniCardTitle}>Residential</span>
                    <span className={classes.miniCardDesc}>Premium housing & estates</span>
                  </div>
                  <div className={`${classes.miniCard} ${classes.miniCardDark}`}>
                    <span className={classes.miniCardIcon}>🏙️</span>
                    <span className={classes.miniCardTitle}>Commercial</span>
                    <span className={classes.miniCardDesc}>Office & retail spaces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PHOTOGRAPHY (Light) ── */}
      <section id="photography" className={classes.bandLight}>
        <div className={classes.bandInner}>
          <div className={`${classes.serviceGrid} ${classes.serviceGridReverse}`}>
            <div className={classes.serviceText}>
              <span className={classes.serviceLabel}>04 — Visual Arts</span>
              <div className={classes.serviceIconRow}>
                <div className={`${classes.serviceIcon} ${classes.iconLight}`}>📷</div>
              </div>
              <h2 className={classes.serviceHeading}>Photography & Videography</h2>
              <p className={classes.serviceBody}>
                Visual storytelling crafted with artistry and precision. From live event coverage to polished creative media productions, we capture moments that matter in stunning detail.
              </p>

              <ul className={classes.featureList}>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Corporate & Commercial Photography</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Event Coverage & Live Streaming</span>
                </li>
                <li className={classes.featureItem}>
                  <div className={classes.featureDot} />
                  <span>Professional Video Production</span>
                </li>
              </ul>

              <Link href="/photography" className={`${classes.serviceLink} ${classes.linkLight}`}>
                Explore Photography →
              </Link>
            </div>

            <div className={`${classes.visualPanel} ${classes.visualPanelLight}`}>
              <div className={classes.visualPanelInner}>
                <div className={classes.visualBigIcon}>🎥</div>
                <div className={classes.miniCards}>
                  <div className={`${classes.miniCard} ${classes.miniCardLight}`}>
                    <span className={classes.miniCardIcon}>🎞️</span>
                    <span className={classes.miniCardTitle}>4K Quality</span>
                    <span className={classes.miniCardDesc}>Ultra high-definition media</span>
                  </div>
                  <div className={`${classes.miniCard} ${classes.miniCardLight}`}>
                    <span className={classes.miniCardIcon}>🎨</span>
                    <span className={classes.miniCardTitle}>Retouching</span>
                    <span className={classes.miniCardDesc}>Expert post-production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PROFESSIONAL TRAINING (Dark standalone grid) ── */}
      <section id="training" className={classes.bandDark}>
        <div className={classes.bandInner}>
          <div className={classes.serviceText} style={{ alignItems: "center", textAlign: "center" }}>
            <span className={classes.serviceLabelLight}>05 — Education</span>
            <h2 className={classes.serviceHeading}>Professional Training & CPD</h2>
            <p className={classes.serviceBody}>
              Empowering individuals and teams through accredited certification programs. Equip yourself with the in-demand skills needed to thrive in today's competitive landscape.
            </p>
          </div>

          <div className={classes.trainingGrid}>
            <div className={classes.trainingCard}>
              <span className={classes.trainingCardIcon}>📊</span>
              <h3 className={classes.trainingCardTitle}>Data Analytics</h3>
              <p className={classes.trainingCardDesc}>Master Power BI, Excel, SQL, and Python to turn complex data into actionable business intelligence.</p>
            </div>
            
            <div className={classes.trainingCard}>
              <span className={classes.trainingCardIcon}>📈</span>
              <h3 className={classes.trainingCardTitle}>Business Analytics</h3>
              <p className={classes.trainingCardDesc}>Bridge the gap between IT and business strategy through comprehensive analytical frameworks.</p>
            </div>
            
            <div className={classes.trainingCard}>
              <span className={classes.trainingCardIcon}>📋</span>
              <h3 className={classes.trainingCardTitle}>Project Management</h3>
              <p className={classes.trainingCardDesc}>Learn agile and traditional methodologies to lead projects efficiently and deliver results on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className={classes.ctaBand}>
        <div className={classes.ctaInner}>
          <h2 className={classes.ctaTitle}>Ready to get started?</h2>
          <p className={classes.ctaBody}>
            Whether you need innovative tech, sustainable engineering, property management, or professional training, our team is here to help you succeed.
          </p>
          <Link href="/contact" className={classes.ctaBtn}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
