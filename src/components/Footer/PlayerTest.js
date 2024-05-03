import React from "react";

const PlayerTest = () => {
  return (
    <>
      <div className="spotify-player">
        {/* <div id="embed-iframe"></div> */}

        {/* 這裡是 Spotify 播放器 */}
        {/* <iframe
          src="https://open.spotify.com/embed/track/0VqSdtXseb9khdZrnYVyM1?si=0714fdd1b7cc417f"
          title="Spotify Player"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe> */}

        {/* <iframe
          src="https://open.spotify.com/embed/episode/5116zAxudGB8EKCUvJ8zb7"
          title="Spotify Player"
          width="80%"
          height="352"
          allow="autoplay;
           clipboard-write; 
           encrypted-media; 
           fullscreen;
            picture-in-picture
            "
          loading="lazy"
        ></iframe> */}
        {/* <div>
          <link
            rel="alternate"
            type="application/json+oembed"
            href="https://open.spotify.com/oembed?url=https%3A%2F%2Fopen.spotify.com%2Fshow%2F5eXZwvvxt3K2dxha3BSaAe"
          />
        </div> */}
      </div>
    </>
  );
};

export default PlayerTest;
