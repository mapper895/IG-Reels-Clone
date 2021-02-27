import React from "react";
import "./VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div>
      <div className="videoHeader">
        <ArrowBackIosIcon />
        <h3>Reels</h3>
        <CameraAltOutlinedIcon />
      </div>
    </div>
  );
}

export default VideoHeader;
