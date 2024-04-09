import React from "react";

const Player = () => {
  return (
    <div className="player-container">
      <div className="playing">
        <div className="bookmark" src="" alt=""></div>
        <h2>正在播放</h2>
        <hr />
        <p>
          Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor
          Creators
        </p>
        <p>
          A Spotify podcast sharing fresh insights on important topics of the
          moment—in a way only Spotify can. You’ll hear from experts in the
          music, podcast and tech industries as we discover and uncover stories
          about our work and the world around us.
        </p>
      </div>
      <div className="player"></div>
    </div>
  );
};

export default Player;
