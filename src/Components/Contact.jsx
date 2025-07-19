import React from "react";
import "../Style/Contact.css";
import Logo from "../images/Logo-NoBG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <div>
            <h1>Contact</h1>
            <p>
              I'm currently looking to join a cross-functional team that values
              improving people's lives through innovative apps or have a project
              in mind? Let's connect.
            </p>
            <div className="allSocLinks">
              <a href="mailto:amanbhardwaj052@gmail.com">
                <FontAwesomeIcon
                  className="socialLinks"
                  icon={faEnvelope}
                  size="xl"
                />
              </a>
              <a href="https://in.linkedin.com/in/aman-bhardwaj-72ba85148">
                <FontAwesomeIcon
                  className="socialLinks"
                  icon={faLinkedin}
                  size="xl"
                />
              </a>
              <a href="https://github.com/AMANBH0207">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="socialLinks"
                  size="xl"
                />
              </a>
            </div>
            <p>Or get my resume by just clicking the link below.</p>
            <a href="https://drive.google.com/file/d/1CRMEXLOyaUaqCLK-Ig2Si6kk2eyevWFf/view?usp=drive_link">
              <FontAwesomeIcon
                icon={faFile}
                className="socialLinks"
                size="xl"
              />
            </a>
          </div>
          <div className="logoAtFooter">
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
