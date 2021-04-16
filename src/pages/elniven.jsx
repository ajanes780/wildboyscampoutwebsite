import React from "react";
import "./lifeSentenceCyclesStyle.scss";
import logo from "../assets/LSC2.png";
import logo1 from "../assets/LSC5.png";
import logo2 from "../assets/LSC4.png";

import {
  EnvelopeOpenFill,
  Facebook,
  Globe2,
  Instagram,
  MusicNote,
  Phone,
} from "react-bootstrap-icons/";

export const ElNiven = () => {
  return (
    <div className="wrapper-lsc">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_VFEa3AUa_E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IxGFIz9WF30"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="contact">
        <h3>
          &nbsp; …With a natural bent for lyrics, Niven’s sound, infused with
          life-experience and the desolate landscapes that feed his imagination,
          is undeniably his. Sometimes strange, often mesmerizing and beautiful,
          Niven’s music demands attention. El Niven and The Alibi began when El
          met drummer Jeff Burwash. Working synergistically with El, Jeff brings
          a diverse skill set and emphasis on groove to the mix. The duo’s
          combined creativity and commitment to the music – together with a love
          of being on the road – has, over the years, solidified their musical
          relationship. The duo play intuitively together creating their own
          take on Western Rock.{" "}
          <a
            href="http://www.elniven.com/#home-section"
            style={{ color: "red" }}
          >
            Read more....
          </a>
        </h3>

        <div className="contact-info">
          <ul>
            <li>
              <EnvelopeOpenFill />
              <a href="mailto:elnivenandthealibi@gmail.com"> &nbsp; Book Us</a>
            </li>
            <li>
              <Globe2 style={{ color: "blue" }} />
              &nbsp;
              <a href="http://www.elniven.com/contact ">&nbsp;elniven.com</a>
            </li>
            <li>
              <MusicNote style={{ color: "yellow" }} />
              &nbsp;
              <a href="https://open.spotify.com/artist/6wlJOdjkVjweEwdb03zlLH?si=I0ClV098SGueQ6mDrG3zBg&nd=1 ">
                &nbsp;El Niven On Spotify
              </a>
            </li>
            <li>
              <Facebook style={{ color: "blue" }} />
              &nbsp;
              <a href="https://www.facebook.com/elnivenandthealibi/ ">
                &nbsp;@elnivenandthealibi
              </a>
            </li>
            <li>
              <Instagram style={{ color: "red" }} />
              <a href="https://www.instagram.com/el_niven/">&nbsp;@el_niven</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
