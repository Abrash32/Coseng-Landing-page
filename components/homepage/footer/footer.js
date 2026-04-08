import classes from "./footer.module.css";
// import logo from "/public/images/cosenglogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const socialMenuLinks = [
    { heading: <FaFacebook />, link: "https://www.facebook.com/cosenglimited" },
    {
      heading: <FaInstagram />,
      link: "https://www.instagram.com/cosenglimited/",
    },
    {
      heading: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/coseng-limited",
    },
    { heading: <FaXTwitter />, link: "https://x.com/CosengLimited" },
  ];

  const SocialQuickLinks = () => {
    return (
      <div className={classes.socialMenuLinks}>
        {socialMenuLinks.map((menu) => {
          return (
            <Link href={menu.link} key={menu.link} target="__blank">
              <li key={menu.link}>{menu.heading}</li>
            </Link>
          );
        })}
      </div>
    );
  };
  const footerQuickLinksTop = [
    {
      title: "QUICK LINKS",
      links: [
        {
          heading: "Home",
          link: "/",
        },
        {
          heading: "About Us",
          link: "/about",
        },
        {
          heading: "Services",
          link: "/services",
        },
        // {
        //   heading: "Media",
        //   link: "/media",
        // },
        {
          heading: "Blog",
          link: "#blog",
        },

        {
          heading: "Contact",
          link: "/contact",
        },
        {
          heading: "Terms of Use",
          link: "#terms-of-use",
        },
      ],
    },
    {
      title: "SERVICES",
      links: [
        {
          heading: "Tech Consulting",
          link: "/TechConsult",
        },
        // {
        //   heading: "Software Technology Services",
        //   link: "/services/software-technology-services",
        // },
        {
          heading: "Biogas and Engineering Support Services",
          link: "/engineering",
        },
        {
          heading: "Assets and Real Estate Management Servicest",
          link: "#property",
        },
        // {
        //   heading: "Training and Developement Services",
        //   link: "/services/training-services",
        // },
        
        // {
        //   heading: "Project Management",
        //   link: "/services/project-management-services",
        // },

        // {
        //   heading: "Biogas and Engineering Support Services",
        //   link: "/services/energy-support-services",
        // },
        // {
        //   heading: "Assets and Real Estate Management Services",
        //   link: "/services/asset-and-facility-management",
        // },
      ],
    },

    {
      title: "SPECIAL OFFERS",
      links: [
        {
          heading: "Photography coverage and editing Services",
          link: "/photography",
        },
        {
          heading: "Interview Preparation Services",
          link: "#interviews",
        },
      ],
    },
  ];
  const footerQuickLinksMiddle = [
    {
      title: "SERVICES",
      links: [
        {
          name: "Data Analytics Training",
          link: "/services/training-services/data-analysis-training",
        },

        {
          heading: "Software Technology Services",
          link: "/services/software-technology-services",
        },
        // {
        //   heading: "Biogas and Engineering Support Services",
        //   link: "/services/energy-support-services",
        // },
        {
          heading: "Business Data Analytics",
          link: "/services/business-data-analytics",
        },
        {
          heading: "Training and Developement Services",
          link: "/services/training-services",
        },
        // {
        //   heading: "Assets and Real Estate Management Services",
        //   link: "/services/asset-and-facility-management",
        // },
        {
          heading: "Project Management",
          link: "/services/project-management-services",
        },
      ],
    },
  ];
  function returnfooterQuickLinks(quickLinkData) {
    return (
      <div className={classes.quickLinksContents}>
        {quickLinkData.map((quickLinks) => {
          return (
            <div className={classes.quickLinkSections} key={quickLinks.title}>
              <h4>{quickLinks.title}</h4>
              <ul>
                {quickLinks.links.map((subLinks) => (
                  <li key={subLinks.heading}>
                    <Link href={subLinks.link}>{subLinks.heading}</Link>
                  </li>
                ))}
                {/* {quickLinks.title === "QUICK LINKS" && (
                  <li>
                    <Link href="/">
                      <Image
                        src={logo}
                        height={70}
                        width={180}
                        alt="coseng Logo"
                      />
                    </Link>
                  </li>
                )} */}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
  const ContactSection = () => {
    return (
      <div className={classes.quickLinkSections}>
        <h4>CONTACT US</h4>
        <ul className={classes.contactUsSection}>
          <li>
            <span>Address: </span>Quorum BusIness Park, Newcastle Upon Tyne United
            Kingdom, NE12 8BU.
          </li>
          <li>
            <span>Phone: </span> +44-778-010-5816
          </li>
          <li>
            <span>E-mail: </span>
            info@coseng.co.uk
          </li>
        </ul>
        <SocialQuickLinks />
      </div>
    );
  };

  return (
    <div className={classes.footerDiv}>
      <footer>
        <div className={classes.footerQuickLinksTop}>
          {returnfooterQuickLinks(footerQuickLinksTop)}
          {/* {returnfooterQuickLinks(footerQuickLinksMiddle)} */}
          <ContactSection />
        </div>
      </footer>

      <div className={classes.subFooter}>
        <section>
          <h3>© {new Date().getFullYear()} - Coseng Limited</h3>
        </section>
        <span>All rights reserved</span>
        <Link href="#terms-of-use">
          Terms of use
        </Link>
      </div>
    </div>
  );
}
