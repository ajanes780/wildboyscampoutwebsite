import React from "react";
import info from "../../assets/info.png";
import "./newsComponentLeftStyle.scss";

export const NewsComponentLeft = () => (
  <div className="news-component-left">
    <img className="news-image-left" src={info} alt="logo" />

    <div className="write-up-left">
      <h1 className="about-us"> About Us </h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        eius earum. Sunt in ipsam debitis. Praesentium consequatur, assumenda
        eaque nisi a voluptatibus totam, ad perspiciatis quaerat minus aperiam
        temporibus expedita? Omnis ipsa nam aut sunt illum, deleniti saepe
        fugiat similique, fugit est iure eaque doloremque explicabo laboriosam
        accusantium. Exercitationem, nam!
      </span>
    </div>
  </div>
);
