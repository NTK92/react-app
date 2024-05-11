import React, { useState } from "react";
import './VideoPlayer.css';
import { Button } from "react-bootstrap";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="video-container">
      <Button className="btn btn-primary play-button" onClick={togglePlay}> {"Смотреть"} </Button>
      {isPlaying && (
        <div className="video-layout" onClick={closeVideo}>
            <video className="video-player" controls autoPlay onClick={stopPropagation}> 
                <source src={process.env.PUBLIC_URL + '/img/finance.mp4'} type="video/mp4" />Your browser does not support the video tag.
            </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;