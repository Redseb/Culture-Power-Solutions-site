import React, { useState, useEffect } from "react";
import "../../../App.scss";
//Hooks

//Components
import Hero from "../../../components/Hero/Hero";
import VideoCard from "../../../components/VideoCard/VideoCard";
//Youtube
import YouTube from "react-youtube";
const VideosEng = () => {
  const [videoId, setVideoId] = useState("Q74TA9e67aY");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);
  const [videoTitle, setVideoTitle] = useState("Video Title");
  const [videoDesc, setVideoDesc] = useState("Video description");
  const opts = {
    height: height / 1.5,
    width: width < 1000 ? width : width / 1.5,
    playerVars: {
      autoplay: 1,
    },
  };

  //   const opts = {
  //     height: height / 2,
  //     width: width / 3,
  //     playerVars: {
  //       autoplay: 1,
  //     },
  //   };

  return (
    <div className="Videos">
      <Hero
        img={require("../../../images/heroVideos.jpg")}
        imgDescription=""
        text="Videos"
      />
      <div className="videoSection">
        <div className="playerSection">
          <YouTube videoId={videoId} opts={opts} />
          <h2 id="videoTitle">{videoTitle}</h2>
          <p id="videoDesc">{videoDesc}</p>
        </div>
        <div className="videoList">
          <VideoCard
            setVideo={setVideoId}
            setVideoTitle={setVideoTitle}
            setVideoDesc={setVideoDesc}
            thumbnail={require("../../../images/videos/pl/videoThumb1.png")}
            title="Irek Zyzański i Bernard Fruga praca z obcokrajowcami oraz komunikacja międzykulturowa"
            desc="How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb?
            These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast.
            On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)
            Enjoy"
            videoId="wi7ZeUi6a8I"
          />
          <VideoCard
            setVideo={setVideoId}
            setVideoTitle={setVideoTitle}
            setVideoDesc={setVideoDesc}
            thumbnail={require("../../../images/videos/pl/videoThumb1.png")}
            title="Irek Zyzański i Bernard Fruga praca z obcokrajowcami oraz komunikacja międzykulturowa"
            desc="How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb?
            These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast.
            On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)
            Enjoy"
            videoId="wi7ZeUi6a8I"
          />
          <VideoCard
            setVideo={setVideoId}
            setVideoTitle={setVideoTitle}
            setVideoDesc={setVideoDesc}
            thumbnail={require("../../../images/videos/pl/videoThumb1.png")}
            title="Irek Zyzański i Bernard Fruga praca z obcokrajowcami oraz komunikacja międzykulturowa"
            desc="How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb?
            These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast.
            On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)
            Enjoy"
            videoId="wi7ZeUi6a8I"
          />
          <VideoCard
            setVideo={setVideoId}
            setVideoTitle={setVideoTitle}
            setVideoDesc={setVideoDesc}
            thumbnail={require("../../../images/videos/pl/videoThumb1.png")}
            title="Irek Zyzański i Bernard Fruga praca z obcokrajowcami oraz komunikacja międzykulturowa"
            desc="How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb?
            These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast.
            On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)
            Enjoy"
            videoId="wi7ZeUi6a8I"
          />
        </div>
      </div>
    </div>
  );
};

export default VideosEng;
