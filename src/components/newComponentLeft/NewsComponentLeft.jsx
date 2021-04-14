import React from "react";
import info from "../../assets/info.png";
import "./newsComponentLeftStyle.scss";
import fistBump from "../../assets/fistbump.jpeg";
export const NewsComponentLeft = () => (
  <div className="news-component-left">
    <img className="news-image-left" src={fistBump} alt="logo" />

    <div className="write-up-left">
      <h1 className="about-us"> What are the Wild Boys Camp Outs</h1>
      <span>
        <br />
        The Wild Boys Camp-Out was established in 2020 by a bunch of blue
        collar, beer drinking, eagle riding motorcycle hooligans. We started by
        spontaneously putting together a casual last minute camp-out that more
        than 100 people attended. When this began we never had the intentions to
        make it an annual event but because of how memorable the camp-outs
        turned out, we decided to make this a summer event in hopes of bringing
        even more of the motorcycle community together. Our philosophy is to
        keep things simple and keep things old school - good laughs, good times
        and good people. No fancy shit! Just pitch a tent, grab a beer and enjoy
        your time with some cool, like-minded people. We are dedicated to
        supporting our community and bringing everyone together through these
        events. We host one big camp-out every summer for two nights and I am
        sure you won't want to miss this event. Currently Wild Boys July 2, 2021
        is on the go! Location is set, the logistics are complete, the bands are
        booked, but due to the current government restrictions on outdoor
        gatherings, ticket sales have been put on hold. Stay up to date with our
        newsletter and on our social media platforms. In addition to the main
        event each year, we host two shotgun camp-outs as well. These are a spur
        of moment, one night spontaneous event where we meet up at a location
        and ride out to a spot to kick it for a night (don’t worry, we will make
        sure you know when!). Our goal is to keep The Wild Boy's Camp Outs true
        to the old school vibe with being focused mostly on riding and a real
        down-to-earth camp-out experience. No pretentiousness, nothing fancy,
        grab your friends, as everyone is invited and included. Come on out and
        set up your spot and get to know people, make new friends and have some
        laughs. Get away from the city, get some wind in your face and enjoy the
        thing we all love. The Wild Boys Camp Out welcomes anyone and everyone
        we just ask that you respect one another, the environment and your
        surroundings.
        <br />{" "}
        <em>
          Stay safe, stay wild. <br />
          ~Wild Boys Camp Out
        </em>
      </span>
    </div>
  </div>
);
