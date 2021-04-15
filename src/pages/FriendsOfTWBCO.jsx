import React from "react";
// import { Button } from "react-bootstrap";
import { CardComponent } from "../components/card/CardComponent";
import { useHistory, withRouter } from "react-router-dom";

import "./friendsOfTWBCOStyle.scss";
import { friends } from "./data/data";

// const data = friends;
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
            // onClick={linkUrl}
          />
        ))}
      </div>
    </>
  );
};
