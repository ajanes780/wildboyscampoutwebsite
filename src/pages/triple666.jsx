import react from "react";
import logo from "../assets/666.png";
import {
  EnvelopeOpenFill,
  Globe2,
  Instagram,
  Phone,
} from "react-bootstrap-icons/";

export const Triple666 = () => {
  return (
    <div className="wrapper-lsc">
      <div className="contact">
        <img src={logo} className="image" alt="" />
        <h3>
          Built for the culture, tested in the climate. Canadian made
          <br />
          Aftermarket Motorcycle Parts. Built for the Culture, Tested in the
          Climate.
        </h3>

        <div className="contact-info">
          <ul>
            <li>
              <EnvelopeOpenFill className="icons-contact" />
              <a href="mailto:tripsixkustoms@hotmail.com">&nbsp; Email Me</a>
            </li>

            <li>
              <Globe2 className="icons-contact" />
              &nbsp;
              <a href="https://www.tripsixkustoms.com/">
                &nbsp;Tripsixkustoms.com
              </a>
            </li>

            <li>
              <Instagram className="icons-contact" />
              <a href="https://www.instagram.com/tripsixkustoms/">
                &nbsp;&nbsp;Tripsixkustoms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
