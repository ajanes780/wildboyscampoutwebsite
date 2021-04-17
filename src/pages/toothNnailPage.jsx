import React from "react";
import "./friendStyle.scss";
import logo from "../assets/TNA.png";
// import logo1 from "../assets/LSC5.png";
// import logo2 from "../assets/LSC4.png";

import { EnvelopeOpen, Globe2, Instagram, Phone } from "react-bootstrap-icons/";

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
            <li className="hover">
              <a href="mailto:cullenm9@msn.com">
                <EnvelopeOpen className="icons-contact" />
                &nbsp; Email Me
              </a>
            </li>
            <li className="hover">
              <a href="www.toothnnailparts.com">
                <Globe2 className="icons-contact" />
                &nbsp; &nbsp;Toothnnailparts.com
              </a>
            </li>
            <li className="hover">
              <a href="https://www.instagram.com/tn_industries/">
                <Instagram className="icons-contact" />
                &nbsp;&nbsp;Tn_industries
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
