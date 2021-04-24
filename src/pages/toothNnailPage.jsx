import React from "react";
import "./friendStyle.scss";
import logo from "../assets/TNA.png";

import { EnvelopeOpen, Globe2, Instagram } from "react-bootstrap-icons/";

export const ToothNNail = () => {
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
          <ul class="contact-items-list">
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
