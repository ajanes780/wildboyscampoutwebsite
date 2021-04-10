import React from "react";
import "./newsComponentStyle.scss";
import wildboys from "../../assets/wildboyscamp.png";
import fistBump from "../../assets/fistbump.jpeg";

export const NewsComponent = () => (
  <div className="news-component-top">
    <div className="write-up">
      <h1> Latest News </h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        eius earum. Sunt in ipsam debitis. Praesentium consequatur, assumenda
        eaque nisi a voluptatibus totam, ad perspiciatis quaerat minus aperiam
        temporibus expedita? Omnis ipsa nam aut sunt illum, deleniti saepe
        fugiat similique, fugit est iure eaque doloremque explicabo laboriosam
        accusantium. Exercitationem, nam!
      </span>
    </div>

    <img className="news-image-top" src={fistBump} alt="logo" />
  </div>
);
