import React, { useState, useCallback } from "react";
import LoginWrapper from "../components/LoginPage/LoginWrapper.js";
import SideIllustration from "../components/LoginPage/SideIllustration.js";
import "../styles/loginContainer.scss";

const Login = () => {
  const [activeCounter, setActiveCounter] = useState(1);
  const [background, setBackground] = useState("#23262f");

  const handleArrowLeftClick = useCallback(() => {
    setActiveCounter((prevCounter) =>
      prevCounter === 1 ? 3 : prevCounter - 1
    );
    setBackground(getBackground(activeCounter - 1));
  }, [activeCounter]);

  const handleArrowRightClick = useCallback(() => {
    setActiveCounter((prevCounter) =>
      prevCounter === 3 ? 1 : prevCounter + 1
    );
    setBackground(getBackground(activeCounter + 1));
  }, [activeCounter]);

  const getBackground = (counter) => {
    const colors = {
      1: "#23262f",
      2: "#2d3831",
      3: "#063540",
    };
    return colors[counter];
  };

  const getTitleAndText = (counter) => {
    switch (counter) {
      case 1:
        return {
          title: "鼓舞人心的故事",
          text: "從非凡的人生故事和成功經歷中獲得靈感",
        };
      case 2:
        return {
          title: "輕鬆分類與管理",
          text: "一目了然的分類，讓收藏的 Podcast 保持整潔",
        };
      case 3:
        return {
          title: "Spotify 快速同步",
          text: "透過 Spotify 登入，即刻同步您的收藏，隨時隨地收聽",
        };
      default:
        return {
          title: "Default Title",
          text: "Default Text",
        };
    }
  };

  const { title, text } = getTitleAndText(activeCounter);

  return (
    <>
      <div className="login-container">
        <div className="left-container">
          <LoginWrapper />
        </div>
        <div className="right-container">
          <SideIllustration
            title={title}
            text={text}
            activeCounter={activeCounter}
            background={background}
            handleArrowLeftClick={handleArrowLeftClick}
            handleArrowRightClick={handleArrowRightClick}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
