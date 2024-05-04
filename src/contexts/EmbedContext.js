import { createContext, useContext, useState, useEffect } from "react";

const EmbedContext = createContext();
export const useEmbed = () => useContext(EmbedContext);

export const EmbedContextProvider = ({ children }) => {
  const [episode, setEpisode] = useState(null);
  const [playStatus, setPlayStatus] = useState("none");
  const [embedController, setEmbedController] = useState(null);

  //重置player
  const destroyPlayer = () => {
    setEpisode(null);
    setPlayStatus("none");
    embedController?.destroy();
    setEmbedController(null);
  };

  //embedController變動則執行
  useEffect(() => {
    if (embedController) {
      embedController.addListener(
        "playback_update",
        (e: Spotify.EmbedControllerEvents) => {
          const { isPaused, isBuffering } = e.data;
          if (isPaused) {
            setPlayStatus("paused");
          } else if (!isPaused && !isBuffering) {
            setPlayStatus("playing");
          }
        }
      );
    }
  }, [embedController]);

  return <EmbedContext.Provider>{children}</EmbedContext.Provider>;
};

export default EmbedContextProvider;
