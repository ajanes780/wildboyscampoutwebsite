import React from "react";
import { NewsComponentLeft } from "../components/newComponentLeft/NewsComponentLeft";
import { NewsComponent } from "../components/newsComponent/newsComponent";
import { NewsletterComponent } from "../components/newsletterComponent/NewsletterComponent";

export const HomePage = () => {
  return (
    <>
      <NewsComponent />
      <NewsComponentLeft />
      <NewsletterComponent />
    </>
  );
};
