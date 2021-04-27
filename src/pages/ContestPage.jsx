import "./contestPageStyle.scss";

import React from "react";
import { ContestComponent } from "../components/contestForm/contestForm";

export const ContestPage = () => {
  return (
    <>
      <div className="contest-container">
        {/* <h3>
          One Lucky Winner <br /> Will receive a wristband for free entry into
          the camp-out & a sticker pack
        </h3> */}
      </div>
      <ContestComponent />
    </>
  );
};
