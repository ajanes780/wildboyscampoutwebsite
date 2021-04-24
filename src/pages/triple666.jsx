import logo from "../assets/666Tiny.jpg";
import { EnvelopeOpenFill, Globe2, Instagram } from "react-bootstrap-icons/";

export const Triple666 = () => {
  return (
    <div className="wrapper-lsc">
      <div className="contact">
        <img src={logo} className="image" alt="" />
        <h3>
          Custom Motorcycle Paint & builds, from mild to wild we do it all
        </h3>

        <div className="contact-info">
          <ul>
            <li className="hover">
              <a href="mailto:tripsixkustoms@hotmail.com">
                <EnvelopeOpenFill className="icons-contact" />
                &nbsp; Email Me
              </a>
            </li>

            <li className="hover">
              <a href="https://www.tripsixkustoms.com/">
                <Globe2 className="icons-contact" />
                &nbsp;Tripsixkustoms.com
              </a>
            </li>

            <li className="hover">
              <a href="https://www.instagram.com/tripsixkustoms/">
                <Instagram className="icons-contact" />
                &nbsp;&nbsp;Tripsixkustoms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
