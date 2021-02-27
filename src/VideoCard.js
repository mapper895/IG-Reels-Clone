import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";

function VideoCard() {
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
        src="https://instagram.furt1-1.fna.fbcdn.net/v/t50.2886-16/151567081_1309734626120889_6562294731708077574_n.mp4?_nc_ht=instagram.furt1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=rFxwakzBj_gAX_fvfjA&oe=603BE988&oh=1b197110c3399c766b366f8691e601b6"
        alt="IG reel video"
        loop
      />
    </div>
  );
}

export default VideoCard;
