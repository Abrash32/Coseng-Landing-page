import CentralTopPages from "@/components/centralTopPages/centralTopPages";
import classes from "./about.module.css";
import ServiceAndExecutiveTeam from "@/components/team/team";
import SideBar from "@/components/sideBar/sideBar";
import HeadedLists from "@/components/headedLists/headedLists";
import Image from "next/image";

export const metadata = {
  title: "About us - Coseng",
  description:
    "At COSENG, our vision is to be a leading provider of innovative and sustainable solutions, driving positive change in businesses, individuals and institutions worldwide.",
};

export default function AboutPage() {
  const executiveTeam = [
    {
      heading: "Beatrice Uchenna E",
      position: "Director, Senior Data Analyst",
      photo: "/images/aboutus/teams/beatrice.jpg",
      content:
        "I am Beatrice, Senior Data Analyst with over 5 years of experience using tools like Power BI, Excel, SQL, and Python to turn complex data into simple, actionable insights. I have worked on projects ranging from business intelligence dashboards to predictive modeling, helping companies make data-driven decisions. Feel free to explore my projects or contact me.",
      linkedIn: "https://www.linkedin.com/in/beatrice-uchenna-egwu-5b2722202/",
      xLink: null,
      isActive: false,
    },
    {
      heading: "Dr. Uchenna Egwu",
      position: "Director, Civil And Environmental Engineer",
      photo: "/images/aboutus/teams/uchenna.jpeg",
      content:
        "Dr. Uchenna is a Civil and Environmental Engineer with expertise in sustainable infrastructure and environmental management. With a Ph.D. in Civil Engineering and a focus on environmental impact assessment, he brings over 15 years of industry experience in infrastructure development and environmental conservation. He is passionate about creating sustainable, eco-friendly solutions for urban development projects.",
      linkedIn: "https://www.linkedin.com/in/uchenna-egwu-9b6221231/",
      xLink: null,
      isActive: false,
    },
    {
      heading: "Gabriel Chibueze",
      position: "Director, Engineering/Project",
      photo: "/images/aboutus/teams/gabriel.jpg",
      content:
        "Dynamic and results-driven Project, Product and Engineering Manager with several years of experience in leading product development, with a focus on AI-powered and SaaS-based solutions. An MSc in Engineering Management and BEng. in Mechanical Engineering, with over 5 years of experience as a fullstack web developer. Proven success in collaborating with cross-functional teams, defining product vision, and executing product roadmaps. Adept at data-driven decision-making and driving product growth through innovation, customer success, and efficiency improvements. Passionate about using cutting-edge technologies, including AI and Machine Learning, to revolutionize business practices and customer experiences.",
      linkedIn: "www.linkedin.com/in/gabriel-egwu",
      xLink: "www.x.com/ChibuezeEgwu",
      isActive: false,
    },
    {
      heading: "Mr Emmanuel Anozie",
      position: "Director, Pipeline Integrity Expert",
      photo: "/images/aboutus/teams/emmanuel.jpg",
      content:
        "Mr. Emmanuel is a seasoned Pipeline Integrity Expert with extensive knowledge in pipeline maintenance, inspection, and risk management. With over 12 years of experience, he specializes in ensuring the structural integrity of pipelines and has contributed to numerous projects involving safety enhancements and integrity assessments. His work is essential for minimizing environmental risks and ensuring safe pipeline operations.",
      linkedIn: null,
      xLink: null,
      isActive: false,
    },
    {
      heading: "Mrs Mary Chukwuma",
      position: "Director, Business Operative",
      photo: "/images/aboutus/teams/mary.jpg",
      content:
        "Mrs. Mary Chukwuma is a highly skilled Business Operative with expertise in organizational strategy and operations management. With a focus on process improvement and team leadership, she has helped streamline operations and increase productivity across various departments. Her passion lies in creating efficient workflows that align with company goals, enhancing productivity, and fostering positive client relations.",
      linkedIn: null,
      xLink: null,
      isActive: false,
    },
  ];

  return (
    <main className={classes.about}>
      <CentralTopPages
        caption="About Us"
        image="/images/aboutus/aboutus.jpg"
        title="Learn more about us and our Team at COSENG"
      />

      <SideBar>
        {/* ── BAND 1: Who We Are (Dark) ── */}
        <section className={classes.bandDark}>
          <div className={classes.bandInner}>
            <div className={classes.splitSection}>
              <div className={classes.splitText}>
                <span className={classes.label}>Who We Are</span>
                <h2 className={classes.bandHeading}>About Us</h2>
                <p className={classes.bandBody}>
                  COSENG was founded in 2020 with a vision to provide innovative
                  and sustainable solutions to individuals, businesses and
                  institutions. From our humble beginnings, we embarked on a
                  journey to provide cutting-edge solutions that drive
                  efficiency, foster growth, and promote environmental
                  responsibility.
                </p>
                <p className={classes.bandBody}>
                  Coseng Limited is a leading data analysis consultancy firm
                  dedicated to transforming complex data into actionable business
                  intelligence. We have partnered with over 100 companies across
                  various industries, helping them unlock the power of their data
                  to drive growth and innovation.
                </p>
              </div>
              <div className={classes.splitImage}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="COSENG team collaboration"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── BAND 2: Mission & Vision (Light) ── */}
        <section className={classes.bandLight}>
          <div className={classes.bandInner}>
            <div className={classes.twoColGrid}>
              <div className={classes.gridItem}>
                <span className={classes.label}>Our Purpose</span>
                <h2 className={classes.gridHeading}>
                  Mission — Empowering Through Solutions
                </h2>
                <p className={classes.gridBody}>
                  Our mission at COSENG is to empower organizations and
                  individuals with transformative solutions that drive
                  efficiency, foster growth, promote environmental
                  responsibility and deliver cutting-edge biogas solutions that
                  optimize resource utilization, reduce carbon emissions, and
                  foster environmental stewardship.
                </p>
                <p className={classes.gridBody}>
                  Through our dedicated team, innovative solutions, and
                  unwavering commitment to excellence and sustainability, we
                  empower organizations and individuals to thrive in a rapidly
                  changing world.
                </p>
              </div>
              <div className={classes.gridItem}>
                <span className={classes.label}>Our Direction</span>
                <h2 className={classes.gridHeading}>Vision</h2>
                <p className={classes.gridBody}>
                  At COSENG, our vision is to be a leading provider of
                  innovative and sustainable solutions, driving positive change
                  in businesses, individuals and institutions worldwide. We
                  aspire to be recognized for our commitment to excellence,
                  integrity, and environmental stewardship.
                </p>
                <p className={classes.gridBody}>
                  Our vision extends beyond borders. We aspire to make a
                  meaningful global impact by partnering with organizations that
                  share our values and commitment to positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BAND 3: Why Our Vision Matters (Dark with image) ── */}
        <section className={classes.bandDark}>
          <div className={classes.bandInner}>
            <div className={classes.splitSection + " " + classes.splitReverse}>
              <div className={classes.splitImage}>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
                  alt="Data analytics visualization"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={classes.splitText}>
                <span className={classes.label}>Why It Matters</span>
                <h2 className={classes.bandHeading}>
                  Why Our Vision Matters
                </h2>
                <p className={classes.bandBody}>
                  Our vision drives us to continuously push boundaries, explore
                  new possibilities, and create lasting value for our clients and
                  communities. Together, we can shape a future where innovation
                  and sustainability go hand in hand to build a better world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BAND 4: Values & Commitment (Light) ── */}
        <section className={classes.bandLight}>
          <div className={classes.bandInner}>
            <div className={classes.centeredIntro}>
              <span className={classes.label}>What Drives Us</span>
              <h2 className={classes.centeredHeading}>Our Values</h2>
              <p className={classes.centeredBody}>
                At COSENG, our values are the foundation of everything we do.
              </p>
            </div>
            <div className={classes.threeColGrid}>
              <div className={classes.valueCard}>
                <h3>Integrity</h3>
                <p>
                  Integrity guides our actions, ensuring transparency, honesty,
                  and ethical conduct in all our interactions.
                </p>
              </div>
              <div className={classes.valueCard}>
                <h3>Excellence</h3>
                <p>
                  We are committed to excellence, continuously striving for
                  innovation, quality, and continuous improvement in our
                  solutions and services.
                </p>
              </div>
              <div className={classes.valueCard}>
                <h3>Collaboration</h3>
                <p>
                  Collaboration and teamwork are at the heart of our approach,
                  fostering partnerships with clients, stakeholders, and
                  communities to achieve shared goals.
                </p>
              </div>
              <div className={classes.valueCard}>
                <h3>Sustainability</h3>
                <p>
                  Sustainability drives our decisions and practices, promoting
                  responsible resource management, environmental preservation,
                  and social well-being.
                </p>
              </div>
              <div className={classes.valueCard}>
                <h3>Commitment</h3>
                <p>
                  Our commitment to our vision and values drives us to go above
                  and beyond for our clients, partners, and communities. We are
                  dedicated to making a positive impact.
                </p>
              </div>
              <div className={classes.valueCard}>
                <h3>Innovation</h3>
                <p>
                  We embrace creativity and innovation to develop cutting-edge
                  solutions that address industry challenges and drive progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BAND 5: Industry & Looking Ahead (Dark) ── */}
        <section className={classes.bandDark}>
          <div className={classes.bandInner}>
            <div className={classes.twoColGrid}>
              <div className={classes.gridItemDark}>
                <span className={classes.labelGold}>Recognition</span>
                <h2 className={classes.gridHeadingDark}>
                  Industry Recognition
                </h2>
                <p className={classes.gridBodyDark}>
                  COSENG&apos;s contributions to the industry have been
                  recognized through awards, certifications, and industry
                  affiliations. As an active member of industry associations, we
                  continuously engage in knowledge-sharing and networking to stay
                  at the forefront of industry trends.
                </p>
              </div>
              <div className={classes.gridItemDark}>
                <span className={classes.labelGold}>The Future</span>
                <h2 className={classes.gridHeadingDark}>Looking Ahead</h2>
                <p className={classes.gridBodyDark}>
                  As we continue to grow and innovate, COSENG remains committed
                  to driving positive change through our services. We are
                  dedicated to expanding our offerings, exploring new
                  technologies, and enhancing our capabilities to meet the
                  evolving needs of our clients and the challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BAND 6: Team (Light) ── */}
        <section className={classes.bandLight}>
          <div className={classes.bandInner}>
            <ServiceAndExecutiveTeam
              type="team"
              propertyArray={executiveTeam}
              heading="Meet Our Team"
              content="Members of the executive team at Coseng"
            />
          </div>
        </section>

        {/* ── BAND 7: Our Approach & Principles (Dark) ── */}
        <section className={classes.bandDark}>
          <div className={classes.bandInner}>
            <div className={classes.centeredIntroDark}>
              <span className={classes.labelGold}>How We Work</span>
              <h2 className={classes.centeredHeadingDark}>Our Approach</h2>
              <p className={classes.centeredBodyDark}>
                We believe in a collaborative and client-centric approach to
                data analysis. Our process starts with understanding your
                business challenges and goals, followed by a comprehensive data
                assessment and the application of advanced analytics techniques.
                The outcome is a set of clear, actionable insights tailored to
                your unique needs.
              </p>
            </div>

            <div className={classes.principlesGrid}>
              <div className={classes.principleItem}>
                <span className={classes.principleNum}>01</span>
                <h3>Excellence</h3>
                <p>
                  We are committed to delivering excellence in every aspect of
                  our work, striving for continuous improvement and exceptional
                  outcomes.
                </p>
              </div>
              <div className={classes.principleItem}>
                <span className={classes.principleNum}>02</span>
                <h3>Collaboration</h3>
                <p>
                  We believe in the power of collaboration and teamwork,
                  leveraging diverse expertise to achieve shared goals.
                </p>
              </div>
              <div className={classes.principleItem}>
                <span className={classes.principleNum}>03</span>
                <h3>Empowerment</h3>
                <p>
                  We empower our clients and stakeholders by providing them with
                  the tools, knowledge, and resources they need to succeed.
                </p>
              </div>
              <div className={classes.principleItem}>
                <span className={classes.principleNum}>04</span>
                <h3>Environmental Responsibility</h3>
                <p>
                  We are dedicated to minimizing our environmental impact and
                  promoting sustainable practices across our operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SideBar>
    </main>
  );
}