import React from "react";
import "./friendStyle.scss";
import logo from "../assets/LSC2.png";

import { EnvelopeOpen, Globe2, Instagram, Phone } from "react-bootstrap-icons/";

export const LifeSentenceCycles = () => {
  return (
    <div className="wrapper-lsc">
      <div className="contact">
        <img src={logo} className="image" alt="" />
        <h3>
          &nbsp; Edmonton Alberta fully certified Harley Davidson repair,
          service and restoration. Journeyman motorcycle mechanics and auto
          Harley Davidson Specialists 1903- Current Models Service - Sales -
          Apparel Journeyman Mechanics Journeyman Auto body Certified &
          Warrantied body.
        </h3>

        <div className="contact-info">
          <ul>
            <li className="hover">
              <a href="tel:+17804402351">
                <Phone className="icons-contact" />
                &nbsp; (780) 440-2351
              </a>
            </li>
            <li className="hover">
              <a href="mailto:lifesentencecycle@gmail.com">
                <EnvelopeOpen className="icons-contact" />
                &nbsp; Email Me
              </a>
            </li>
            <li className="hover">
              <a href="http://Lifesentencecycles.com ">
                <Globe2 className="icons-contact" />
                &nbsp; LifeSentenceCycles
              </a>
            </li>
            <li className="hover">
              <a href="https://www.instagram.com/lifesentencecycles/">
                <Instagram className="icons-contact" />
                &nbsp; LifeSentenceCycles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
