import React from "react";
import "./newsComponentStyle.scss";
import wildboys from "../../assets/wildboyscamp.png";

export const NewsComponent = () => (
  <div className="news-component-top">
    <div className="write-up">
      <h1> Latest News </h1>
      <span>Updates coming soon...</span>
    </div>

    <img className="news-image-top" src={wildboys} alt="logo" />
  </div>
);
