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
          Built for the culture, tested in the climate
          <br />
          Canadian made aftermarket motorcycle parts
        </h3>
        <div className="contact-info">
          <ul class="contact-items-list">
            <li className="hover">
              <a href="mailto:cullenm9@msn.com">
                <EnvelopeOpen className="icons-contact" />
                &nbsp; Email
              </a>
            </li>
            <li className="hover">
              <a href="http://www.toothnnailparts.com">
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
