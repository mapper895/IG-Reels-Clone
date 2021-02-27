import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // Stop Video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // Play Video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
