import React, { useState } from "react";
import "../../../App.scss";
//Hooks

//Components
import Hero from "../../../components/Hero/Hero";
import VideoCard from "../../../components/VideoCard/VideoCard";
//Youtube
import YouTube from "react-youtube";
const VideosEng = () => {
  const [videoId, setVideoId] = useState("xa0Py8FjPqI");
  const [videoTitle, setVideoTitle] = useState(
    "How Poles are perceived by - Irek Zyzanski and Bernard Fruga"
  );
  const [videoDesc, setVideoDesc] = useState(
    "How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb? These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast. On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)Enjoy"
  );
  const opts = {
    height: window.innerHeight / 1.5,
    width:
      window.innerWidth < 1000 ? window.innerWidth : window.innerWidth / 1.7,
    playerVars: {
      autoplay: 1,
    },
  };

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
            thumbnail={require("../../../images/videos/eng/videoThumb1.png")}
            title="How Poles are perceived by - Irek Zyzanski and Bernard Fruga"
            desc="How Poles are perceived by foreigners. Will perception be different depending on their nationalities? How can you effectively communicate and cooperate with customers from China, Germany and the US? What are some potential traps and how should you defuse the communication bomb?
            These are only a few of the questions we are addressing with Bernard Fruga in our new video-cast.
            On a lighter note - yes - a delicate green shine on our hairs is due to little bit of overuse of the light, but it does not impact the conversation quality :-)
            Enjoy"
            videoId="xa0Py8FjPqI"
          />
        </div>
      </div>
    </div>
  );
};

export default VideosEng;
