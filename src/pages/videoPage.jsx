import React from "react";
import video from "../assets/bois.mp4";

export const videoPage = () => {
  return (
    <>
      <div class="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        loop="loop"
        style={{ height: "50vh" }}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <h1 class="display-3">Video Header</h1>
            <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
          </div>
        </div>
      </div> */}
    </>
  );
};
