import React from "react";
import "./friendStyle.scss";
import logo from "../assets/EE.png";

import {
  EnvelopeOpenFill,
  Globe2,
  Instagram,
  Phone,
} from "react-bootstrap-icons/";

export const EvilEmpire = () => {
  return (
    <div className="wrapper-lsc">
      {/* <img src={logo2} className="image" alt="" /> */}
      <div className="contact">
        {/* <img src={logo1} className="image" alt="" /> */}
        <img src={logo} className="image" alt="" />

        <h3>
          Local YEG Based business bringing the freshest style and quality to
          the culture
          <br /> AKA:THE VEST PLUG <br />
          NOT JUST A NAME BUT A LIFESTYLE......
        </h3>
        <div className="contact-info">
          <ul>
            <li className="hover">
              <a href="https://e-villeempire.com/">
                <Globe2 className="icons-contact" />
                &nbsp;E-villeempire.com
              </a>
            </li>
            <li className="hover">
              <a href="https://www.instagram.com/eville.empire/?hl=en">
                <Instagram className="icons-contact" />
                &nbsp;Evil.Empire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
