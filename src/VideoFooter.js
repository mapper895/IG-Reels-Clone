import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import Ticker from "react-ticker";
import {
  Favorite,
  FavoriteSharp,
  ModeComment,
  MoreHoriz,
  MusicNote,
  Send,
} from "@material-ui/icons";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} • <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <Favorite />
          <ModeComment />
          <Send />
          <MoreHoriz />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteSharp />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
