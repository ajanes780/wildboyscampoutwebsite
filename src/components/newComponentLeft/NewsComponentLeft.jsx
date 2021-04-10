import React from "react";
import info from "../../assets/info.png";
import "./newsComponentLeftStyle.scss";
import fistBump from "../../assets/fistbump.jpeg";
export const NewsComponentLeft = () => (
  <div className="news-component-left">
    <img className="news-image-left" src={fistBump} alt="logo" />

    <div className="write-up-left">
      <h1 className="about-us"> Who Are The Wild Boys </h1>
      <span>
        <br />
        We host some of the best motorcycle rides and campouts in Alberta. We
        are dedicated to supporting our community and bringing our community
        together through these events. Our culture of inclusiveness, loyalty
        respect, and the open road is something we cherish and invite you to be
        part of We host one big campout every summer for two nights and I'm sure
        you won't want to miss this event ( need more info on the big event here
        ) In addition to the main event each year. We host two shotgun campouts
        per year as well. These are spur-of-moment spontaneous events ( don't
        worry will make sure you know when ) one-night adventures. Where we meet
        up at a location and ride out to a spot to kick it for a night. Our goal
        is to keep The Wild Boy's Campouts true to the old-school vibe. With
        being focused mostly on riding and a real down-to-earth campout
        experience. No pretentiousness, nothing fancy grab your friends, and
        everyone is invited and included. Come on out and set up your spot and
        get to know people make new friends and have some laughs. Get away from
        the city and get some wind in your face and enjoy the thing we all love.
        <br /> <em>Keep it simple Stay safe Zack - TWBCO</em>
      </span>
    </div>
  </div>
);
