import React from "react";
import "./friendStyle.scss";
import logo from "../assets/TNA.png";
// import logo1 from "../assets/LSC5.png";
// import logo2 from "../assets/LSC4.png";

import {
  EnvelopeOpenFill,
  Globe2,
  Instagram,
  Phone,
} from "react-bootstrap-icons/";

export const ToothNNail = () => {
  return (
    <div className="wrapper-lsc">
      {/* <img src={logo2} className="image" alt="" /> */}
      <div className="contact">
        {/* <img src={logo1} className="image" alt="" /> */}
        <img src={logo} className="image" alt="" />

        <h3>
          Built for the culture, tested in the climate. Canadian made
          <br />
          Aftermarket Motorcycle Parts. Built for the Culture, Tested in the
          Climate.
        </h3>
        <div className="contact-info">
          <ul>
            {/* <li>
              <Phone className="icons-contact" />
              <a href="tel:+17804402351"> &nbsp; (780) 440-2351</a>
            </li> */}
            <li>
              <EnvelopeOpenFill className="icons-contact" />
              <a href="mailto:cullenm9@msn.com"> &nbsp; Email Me</a>
            </li>
            <li>
              <Globe2 className="icons-contact" />
              &nbsp;
              <a href="www.toothnnailparts.com">&nbsp;Toothnnailparts.com</a>
            </li>
            <li>
              <Instagram className="icons-contact" />
              <a href="https://www.instagram.com/tn_industries/">
                &nbsp;&nbsp;Tn_industries
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
