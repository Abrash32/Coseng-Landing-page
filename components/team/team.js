"use client";
import classes from "./team.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import userIcon from "@/public/images/aboutus/usericon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import CtaButton from "@/components/homepage/buttons/ctabuttonlink";

export default function ServiceAndExecutiveTeam({
  type,
  propertyArray,
  heading,
  content,
}) {
  const [teamIndex, setTeamIndex] = useState(null);
  const [actualTeams, setActualTeams] = useState(propertyArray);
  function showCurrentTeamDetail(index) {
    setActualTeams((prevState) =>
      prevState.map((arr, indx) =>
        index === indx
          ? { ...arr, isActive: !arr.isActive }
          : { ...arr, isActive: false }
      )
    );
  }

  return (
    <section className={classes.ourTeam}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem", color: "#4F772D" }}>{heading}</h2>
      <p style={{ marginBottom: "2rem", textAlign: "center", opacity: 0.9 }}>{content}</p>
      <ul
        className={
          type === "team" ? classes.executiveTeam : classes.ourServices
        }
      >
        {actualTeams.map((prop, index) => (
          <li
            key={prop.heading}
            className={`${classes.teamMember} ${
              teamIndex === index ? classes.activeTeam : ""
            } ${prop.isActive ? classes.activeTeam : ""}`}
            onMouseEnter={() => setTeamIndex(index)}
            onMouseLeave={() => setTeamIndex(null)}
          >
            <section
              className={classes.topTeamSection}
              onClick={() => showCurrentTeamDetail(index)}
            >
              <div className={classes.teamProfile}>
                {type === "team" && (
                  <div
                    className={classes.userIcon}
                    style={{
                      minHeight: `${prop.isActive ? "100px" : "50px"}`,
                      maxHeight: `${prop.isActive ? "100px" : "50px"}`,
                      minWidth: `${prop.isActive ? "100px" : "50px"}`,
                      maxWidth: `${prop.isActive ? "100px" : "50px"}`,
                    }}
                  >
                    <Image
                      src={prop.photo ? prop.photo : userIcon}
                      alt={prop.photo ? prop.heading : "user photo"}
                      fill
                    />
                  </div>
                )}
                <div>
                  <div className={classes.slowlyShowText}>
                    {type === "services" && prop.isActive ? (
                      <h3>{prop.heading}</h3>
                    ) : (
                      <h4>{prop?.heading}</h4>
                    )}
                  </div>
                  <p className={classes.position}>{prop?.position}</p>
                </div>
              </div>
              <p>
                {prop.isActive ? (
                  <span>
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span>
                    <IoIosArrowDown />
                  </span>
                )}
              </p>
            </section>
            {prop.isActive && (
              <section className={classes.bottomTeamSection}>
                <p style={{ textAlign: "justify", minHeight: "200px" }}>
                  {prop.content || "No update. Check back later..."}
                </p>
                {type === "services" && (
                  <div style={{ marginTop: "1rem" }}>
                    <CtaButton type="link" design="raised" action={prop.link}>
                      Learn more
                    </CtaButton>
                  </div>
                )}
                <div
                  className={classes.teamSocialLinks}
                  style={{ marginTop: "0.7rem" }}
                >
                  {(prop.xLink && prop.xLink.trim().lenght > 1) ||
                    (prop.linkedIn && <p>Connect Via:</p>)}
                  {prop.linkedIn && (
                    <Link href={prop.linkedIn}>
                      <h3>
                        <FaLinkedinIn />
                      </h3>
                    </Link>
                  )}
                  {prop.xLink && (
                    <Link href={prop.xLink}>
                      <h3>
                        <FaXTwitter />
                      </h3>
                    </Link>
                  )}
                </div>
              </section>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
