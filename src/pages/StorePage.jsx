import React from "react";
import logo from "../assets/logo.jpeg";
import "./storePageStyle.scss";
import { CardComponent } from "../components/card/CardComponent";

export const StorePage = () => {
  const message = `Some quick example text to build on the card title and make up the bulk
  of the card's content`;
  const title = `Title`;
  const buttonMsg = `Buy Me`;
  return (
    <>
      <h1>Coming Soon</h1>
      <div className="wrapper-store">
        <CardComponent
          image={logo}
          buttonMsg={buttonMsg}
          title={title}
          bio={message}
        />
        <CardComponent
          image={logo}
          buttonMsg={buttonMsg}
          title={title}
          bio={message}
        />
        <CardComponent
          image={logo}
          buttonMsg={buttonMsg}
          title={title}
          bio={message}
        />
      </div>
    </>
  );
};
