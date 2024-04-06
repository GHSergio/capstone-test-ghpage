import React, { useState, useCallback } from "react";
import Counter from "./Counter/Counter";

const SideIllustration = ({ title, text }) => {
  const [activeCounter, setActiveCounter] = useState(1);

  const handleArrowLeftClick = useCallback(() => {
    setActiveCounter((prevCounter) => ((prevCounter - 2 + 3) % 3) + 1);
  }, []);

  const handleArrowRightClick = useCallback(() => {
    setActiveCounter((prevCounter) => (prevCounter % 3) + 1);
  }, []);

  return (
    <>
      <img
        src="https://s3-alpha-sig.figma.com/img/42da/1823/a1eea6bcd7c4273c62160f93ba61216d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPJytL0YTqXUhMszeJ9ByEid48C3o~v~0uz6BbmRgON~YrN7OsGTB5J0DyrnwI5~~-bSa29YUjapKRze8nyz1Va0jNLJRT5VJ~78kIo5U8mmh7-GbgzOCOKkipXPziQw35XeiPo~~1fHSVZKkgqqSUEfNwc1imxhHJmx-Gcrc5sRBUk-7pAOMMr-7EGthLt~vxKQOofNh6ZVbWVKrd2ab6IcG8wgKEXJgXt6jcn1PlSAVD6OvNa-POEXz3aZ~QPCnpzBGljZV8kRBteTo7RuROibpYTZPZhhiVT63oIArq93jpPVcZmScyu~14GRWy5spGbHnVI8YaAYh8~-OahuwQ__"
        alt=""
        className="font"
      />
      <div className="controller">
        <div className="arrow-left" onClick={handleArrowLeftClick}>
          <svg
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6833 17.65L5.05 10L12.6833 2.35L10.3333 0L0.333336 10L10.3333 20L12.6833 17.65Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="arrow-right" onClick={handleArrowRightClick}>
          <svg
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.31665 17.65L7.94998 10L0.31665 2.35L2.66665 0L12.6667 10L2.66665 20L0.31665 17.65Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="counters">
          <Counter active={activeCounter === 1} />
          <Counter active={activeCounter === 2} />
          <Counter active={activeCounter === 3} />
        </div>
      </div>
      <div className="shadow"></div>
      <div className="content">
        <span className="title">{title}</span>
        <p className="text">{text}</p>
      </div>
    </>
  );
};

export default SideIllustration;
