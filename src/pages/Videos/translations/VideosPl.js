import React, { useState } from "react";
import "../../../App.scss";
//Components
import Hero from "../../../components/Hero/Hero";
import Footer from "../../../components/Footer/Footer";
import VideoCard from "../../../components/VideoCard/VideoCard";
//Youtube
import YouTube from "react-youtube";
const VideosPl = () => {
  const [videoId, setVideoId] = useState("wi7ZeUi6a8I");
  const [videoTitle, setVideoTitle] = useState(
    "Irek Zyzański i Bernard Fruga praca z obcokrajowcami oraz komunikacja międzykulturowa"
  );
  const [videoDesc, setVideoDesc] = useState(
    "Podcast with Bernard Fruga about cross cultural communication and management"
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
        imgDescription="Zamek Himeji"
        text="Filmy"
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
            thumbnail={require("../../../images/videos/pl/videoThumb2.png")}
            title="Program Mentoringowy - Project Management Institute"
            desc=""
            videoId="8r8Ck76upos"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideosPl;
