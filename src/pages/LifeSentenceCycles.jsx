import React from "react";
import "./lifeSentenceCyclesStyle.scss";
import logo from "../assets/LSC2.png";
import logo1 from "../assets/LSC3.png";
import logo2 from "../assets/LSC4.png";

import { EnvelopeOpenFill, Globe2, Phone } from "react-bootstrap-icons/";

export const LifeSentenceCycles = () => {
  return (
    <div>
      <div className="wrapper-lsc">
        <img src={logo1} alt="" />
        <img src={logo} alt="" />
        <img src={logo2} alt="" />
        <div className="contact">
          <h3>
            &nbsp;
            <br /> Edmonton Alberta fully certified Harley Davidson repair,
            service and restoration. <br />
            Journeyman motorcycle mechanics and auto Harley Davidson Specialists
            <br />
            1903- Current Models Service - Sales - Apparel Journeyman Mechanics
            Journeyman Auto body Certified & Warrantied body.
          </h3>
          <ul>
            <li>
              <Phone />
              &nbsp; (780) 440-2351
            </li>
            <li>
              <EnvelopeOpenFill />
              &nbsp; lifesentencecycle@gmail.com
            </li>
            <li>
              <Globe2 />
              &nbsp; http://Lifesentencecycles.com/
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};