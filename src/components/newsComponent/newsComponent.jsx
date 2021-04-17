import React from "react";
import "./newsComponentStyle.scss";
import { ArrowDown } from "react-bootstrap-icons";
import wildboys from "../../assets/wildboyscamp.png";

export const NewsComponent = () => (
  <div className="news-component-top">
    <div className="write-up">
      <h1> Latest News </h1>
      <br></br>
      <span>
        Wild Boys July 2, 2021 is on the go! Location is set, the logistics are
        completed and the bands are booked, but due to the current government
        restrictions on outdoor gatherings, ticket sales have been put on hold.
        Stay up to date on our social media platforms and susbsribe to the
        mailing list so you never miss a thing !
      </span>
      <br />
      <ArrowDown className="down-arrow" />
    </div>

    <img className="news-image-top" src={wildboys} alt="logo" />
  </div>
);
