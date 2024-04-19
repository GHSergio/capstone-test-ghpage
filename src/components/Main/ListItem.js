import React from "react";
import { usePodcastList } from "../../contexts/PodcastListContext";
import "../../styles/favoriteList.scss";
const ListItem = ({ item }) => {
  const { favoriteList, handleClickBookmark } = usePodcastList();
  // 提取item內的屬性
  const { title, imageUrl, description, date, duration } = item;

  // 判斷影片是否在最愛清單中
  const isFavorite =
    favoriteList.channelList &&
    favoriteList.channelList.some((favorite) => favorite.title === item.title);

  return (
    <>
      <div className="video-container">
        <div className="video-wrapper">
          <div className="video-image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="video-content">
            <span className="title">{title}</span>
            <span className="description">{description}</span>
            <div className="switch-wrapper">
              <div className="player">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0.333374C7.80004 0.333374 0.333374 7.80004 0.333374 17C0.333374 26.2 7.80004 33.6667 17 33.6667C26.2 33.6667 33.6667 26.2 33.6667 17C33.6667 7.80004 26.2 0.333374 17 0.333374ZM13.6667 24.5V9.50004L23.6667 17L13.6667 24.5Z"
                    fill="#FF7F50"
                  />
                </svg>
              </div>
              <p className="date">
                {date} - {duration}
              </p>
            </div>

            <div className="bookmark" onClick={() => handleClickBookmark(item)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_38_14)">
                  <path
                    d="M14.1667 2.5H5.83341C4.91675 2.5 4.16675 3.25 4.16675 4.16667V17.5L10.0001 15L15.8334 17.5V4.16667C15.8334 3.25 15.0834 2.5 14.1667 2.5Z"
                    fill={isFavorite ? "#FF7F50" : "#FFFFFF"}
                    stroke="#FF7F50"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_14">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
