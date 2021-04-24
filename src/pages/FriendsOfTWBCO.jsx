import React from "react";
import { CardComponent } from "../components/card/CardComponent";

import "./friendsOfTWBCOStyle.scss";
import { friends } from "./data/data";

export const FriendsOfTWBCO = () => {
  return (
    <>
      <h1> Friends of the Wild Boys Camp Outs</h1>
      <div className="wrapper-friends">
        {friends.map(({ title, message, buttonMsg, linkUrl, image, id }) => (
          <CardComponent
            id={id}
            image={image}
            buttonMsg={buttonMsg}
            title={title}
            bio={message}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    </>
  );
};
