import logo from "../assets/dd.png";
import {
  EnvelopeOpenFill,
  Globe2,
  Instagram,
  Facebook,
} from "react-bootstrap-icons/";

export const Death = () => {
  return (
    <div className="wrapper-lsc">
      <div className="contact">
        <img src={logo} className="image" alt="" />
        <h3>
          A proudly veteran owned and operated company striving to cater to the
          adrenaline junkies, risk takers, thrill seekers, and all who like to
          push that envelope a little bit further.
        </h3>

        <div className="contact-info">
          <ul class="contact-items-list">
            <li className="hover">
              <a href="mailto: thecrew@deathdefied.ca">
                <EnvelopeOpenFill className="icons-contact" />
                &nbsp; Email Me
              </a>
            </li>

            <li className="hover">
              <a href="https://deathdefied.ca/">
                <Globe2 className="icons-contact" />
                &nbsp;Deathdefied.ca
              </a>
            </li>
            <li className="hover">
              <a href="https://www.facebook.com/www.deathdefied.ca/ ">
                <Facebook className="icons-contact" />
                &nbsp; &nbsp; Death Defied
              </a>
            </li>

            <li className="hover">
              <a href="https://www.instagram.com/death.defied/">
                <Instagram className="icons-contact" />
                &nbsp;&nbsp; Death Defied
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
