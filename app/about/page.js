import CentralTopPages from "@/components/centralTopPages/centralTopPages";

import classes from "./about.module.css";

import ServiceAndExecutiveTeam from "@/components/team/team";

import SideBar from "@/components/sideBar/sideBar";

import HeadedLists from "@/components/headedLists/headedLists";

export const metadata = {
  title: "About us - Coseng",
  description:
    "At COSENG, our vision is to be a leading provider of innovative and sustainable solutions, driving positive change in businesses, individuals and institutions worldwide.",
};

export default function AboutPage() {

  const aboutUsContentsTop = [

    {

      heading: "About Us",

      content:

        "COSENG was founded in 2020 with a vision to provide innovative and sustainable solutions to individuals, businesses and institutions. From our humble beginnings, we embarked on a journey to provide cutting-edge solutions that drive efficiency, foster growth, and promote environmental responsibility. Coseng Limited is a leading data analysis consultancy firm dedicated to transforming complex data into actionable business intelligence.",

      subContent:

        "We have partnered with over 100 companies across various industries, helping them unlock the power of their data to drive growth and innovation. Our mission is to give businesses the insights they need to thrive in an increasingly data-driven world.",

    },

    {

      heading: "Mission - Empowering Through Solutions",

      content:

        "Our mission at COSENG is to empower organizations and individuals with transformative solutions that drive efficiency, foster growth,  promote environmental responsibility and deliver cutting-edge biogas solutions that optimize resource utilization, reduce carbon emissions, and foster environmental stewardship.",

      subContent:

        "Through our dedicated team, innovative solutions, and unwavering commitment to excellence and sustainability, we empower organizations and individuals to thrive in a rapidly changing world. Our mission is not just to solve problems but to enable lasting success and positive impact.",

    },

    {

      heading: "Vision",

      content:

        "At COSENG, our vision is to be a leading provider of innovative and sustainable solutions, driving positive change in businesses, individuals and institutions worldwide. We aspire to be recognized for our commitment to excellence, integrity, and environmental stewardship.",

      subContent:

        " Our vision extends beyond borders. We aspire to make a meaningful global impact by partnering with organizations that share our values and commitment to positive change.",

    },

    {

      heading: "Why Our Vision Matters",

      content:

        "Our vision drives us to continuously push boundaries, explore new possibilities, and create lasting value for our clients and communities. Together, we can shape a future where innovation and sustainability go hand in hand to build a better world.",

    },

    {

      heading: "Our Values",

      content:

        "At COSENG, our values are the foundation of everything we do. Integrity guides our actions, ensuring transparency, honesty, and ethical conduct in all our interactions. We are committed to excellence, continuously striving for innovation, quality, and continuous improvement in our solutions and services.",

      subContent:

        "Collaboration and teamwork are at the heart of our approach, fostering partnerships with clients, stakeholders, and communities to achieve shared goals. Sustainability drives our decisions and practices, promoting responsible resource management, environmental preservation, and social well-being.",

    },

    {

      heading: "Our Commitment",

      content:

        "Our commitment to our vision and values drives us to go above and beyond for our clients, partners, and communities. We are dedicated to making a positive impact and contributing to a sustainable future for generations to come.",

    },

    {

      heading: "Industry Recognition",

      content:

        "COSENG's contributions to the industry have been recognized through awards, certifications, and industry affiliations. As an active member of industry associations, we continuously engage in knowledge-sharing and networking to stay at the forefront of industry trends.",

    },

    {

      heading: "Looking Ahead",

      content:

        "As we continue to grow and innovate, COSENG remains committed to driving positive change through our services. We are dedicated to expanding our offerings, exploring new technologies, and enhancing our capabilities to meet the evolving needs of our clients and the challenges of tomorrow.",

    },

  ];


  const aboutContentsBotttom = [

    {

      heading: "Our Approach",

      content:

        "We believe in a collaborative and client-centric approach to data analysis. Our process starts with understanding your business challenges and goals, followed by a comprehensive data assessment and the application of advanced analytics techniques. The outcome is a set of clear, actionable insights tailored to your unique needs.",

    },

    {

      heading: "Our Commitment",

      content:

        "At COSENG, we are driven by a relentless commitment to excellence and client satisfaction. We pride ourselves on delivering impactful solutions that make a difference in our clients' businesses and operations. Our dedication to quality, innovation, and sustainability has earned us a reputation as a preferred service provider in the industry.",

    },

    {

      heading: "Our Key Principles",

      content:

        "We embrace creativity and innovation to develop cutting-edge solutions that address industry challenges and drive progress. We prioritize environmental sustainability in all our projects, promoting eco-friendly practices and solutions.",

      principles: [

        "Excellence: We are committed to delivering excellence in every aspect of our work, striving for continuous improvement and exceptional outcomes.",

        "Collaboration: We believe in the power of collaboration and teamwork, leveraging diverse expertise to achieve shared goals.",

        "Empowerment: We empower our clients and stakeholders by providing them with the tools, knowledge, and resources they need to succeed.",

        "Environmental Responsibility: We are dedicated to minimizing our environmental impact and promoting sustainable practices across our operations.",

      ],

    },

  ];

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

        <div className={classes.aboutPage}>

          <section className={classes.aboutContents}>

            {aboutUsContentsTop.map((aboutTop) => (

              <div key={aboutTop.heading} className={classes.content}>

                <h2>{aboutTop.heading}</h2>

                <p>{aboutTop.content}</p>

                <p style={{ marginTop: "-0.5rem" }}>{aboutTop.subContent}</p>

              </div>

            ))}

          </section>

          <ServiceAndExecutiveTeam

            type="team"

            propertyArray={executiveTeam}

            heading="Meet Our Team"

            content="Members of the executive team at Coseng"

          />

          <section className={classes.aboutContents}>

            {aboutContentsBotttom.map((aboutBottom) => (

              <div key={aboutBottom.heading} className={classes.content}>

                <h2>{aboutBottom?.heading}</h2>

                <p>{aboutBottom?.content}</p>

                {aboutBottom?.principles && (

                  <HeadedLists lists={aboutBottom.principles} />

                )}

              </div>

            ))}

          </section>

        </div>

      </SideBar>

    </main>

  );

}