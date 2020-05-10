import React from "react";
import "../../App.scss";
import "./VideoCard.scss";

const VideoCard = ({
  setVideo,
  setVideoTitle,
  setVideoDesc,
  thumbnail,
  title,
  videoId,
  desc,
}) => {
  return (
    <div
      className="VideoCard"
      onClick={() => {
        setVideo(videoId);
        setVideoTitle(title);
        setVideoDesc(desc);
      }}
    >
      <img src={thumbnail} alt={title} />
      <div className="content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
