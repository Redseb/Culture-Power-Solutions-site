import React, { useEffect } from "react";
import "../../App.scss";
import "./Videos.scss";
import VideosEng from "./translations/VideosEng";
import VideosPl from "./translations/VideosPl";
const Videos = ({ isEng }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isEng) {
    return <VideosEng />;
  } else {
    return <VideosPl />;
  }
};

export default Videos;
