import "./contestPageStyle.scss";

import React from "react";
import { ContestComponent } from "../components/contestForm/contestForm";

export const ContestPage = () => {
  return (
    <>
      <div className="contest-container">
        <h3>
          One Lucky Winner <br /> Will Get an all inclusive Wrist band and
          Invitation to the party
        </h3>
      </div>
      <ContestComponent />
    </>
  );
};
