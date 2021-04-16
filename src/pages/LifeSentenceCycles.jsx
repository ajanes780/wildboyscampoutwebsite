import React from "react";
import "./lifeSentenceCyclesStyle.scss";
import logo from "../assets/LSC2.png";
import logo1 from "../assets/LSC5.png";
import logo2 from "../assets/LSC4.png";

import {
  EnvelopeOpenFill,
  Globe2,
  Instagram,
  Phone,
} from "react-bootstrap-icons/";

export const LifeSentenceCycles = () => {
  return (
    <div className="wrapper-lsc">
      {/* <img src={logo2} className="image" alt="" /> */}
      <div className="contact">
        {/* <img src={logo1} className="image" alt="" /> */}
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
            <li>
              <Phone className="icons-contact" />
              <a href="tel:+17804402351"> &nbsp; (780) 440-2351</a>
            </li>
            <li>
              <EnvelopeOpenFill className="icons-contact" />
              <a href="mailto:lifesentencecycle@gmail.com"> &nbsp; Email Me</a>
            </li>
            <li>
              <Globe2 className="icons-contact" />
              &nbsp;
              <a href="http://Lifesentencecycles.com ">
                &nbsp;LifeSentenceCycles.com
              </a>
            </li>
            <li>
              <Instagram className="icons-contact" />
              <a href="https://www.instagram.com/lifesentencecycles/">
                &nbsp;LifeSentenceCycles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
