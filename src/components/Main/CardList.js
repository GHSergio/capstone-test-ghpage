import React, { useState, useEffect } from "react";
import "../../styles/content.scss";
import Card from "./Card";
import AddCardModal from "./Modal/AddCardModal";
import ListItem from "./ListItem";
import { usePodcastList } from "../../contexts/PodcastListContext";
import { searchShows, getShows, getShowWithEpisodes } from "../../api/spotify";
import EmptyFolder from "../../assets/EmptyFolder.svg";
const CardList = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
  handleConfirmModal,
}) => {
  const {
    activeList,
    categoryContent,
    channelList,
    favoriteList,
    activeEpisode,
    handleClickListItem,
    handleClickPlayer,
  } = usePodcastList();

  const [showResults, setShowResults] = useState([]);
  // const [shouldFetchData, setShouldFetchData] = useState(true);

  const activeCategoryContent = categoryContent && categoryContent[activeList];

  //取得 data 傳遞給 card 渲染
  console.log("activeCategoryContent saveShows:", activeCategoryContent);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        // 確保 activeCategoryContent 存在 & saveShows 是 Array
        if (
          !activeCategoryContent ||
          !Array.isArray(activeCategoryContent.savedShows)
        ) {
          console.warn("activeCategoryContent.savedShows is not an array");
          return;
        }

        // 使用 map 遍歷 savedShows
        const promises = activeCategoryContent.savedShows.map((show) =>
          getShowWithEpisodes(show.id)
        );

        // 使用 Promise.all 確保所有的 getShowWithEpisodes 調用都完成
        const results = await Promise.all(promises);

        // 更新 showResults
        setShowResults(results);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, [activeCategoryContent]);

  useEffect(() => {
    console.log("showResults:", showResults);
  }, [showResults]);

  //回傳收藏內的id
  const favoriteIds = favoriteList && favoriteList.map((item) => item.id);
  // console.log("favoriteIds:", favoriteIds && favoriteIds);

  // 從 channelList 篩選出符合 favoriteList id 的 episodes
  const matchesEpisodes = channelList.flatMap((channel) =>
    channel.episodes.filter((episode) => favoriteIds.includes(episode.id))
  );

  //分類清單
  const getCategoryContent = () => {
    //當List沒有內容
    if (
      !activeCategoryContent ||
      !activeCategoryContent.savedShows ||
      activeCategoryContent.savedShows.length === 0
    ) {
      return (
        <>
          <div className="default">
            <img src={EmptyFolder} alt="EmptyFolder" />
            <span>您尚未加入任何 Podcast，可以點擊按鈕新增！</span>
            <button className="button-add" onClick={handleOpenModal}>
              <p>新增 Podcast</p>
            </button>

            <AddCardModal
              isOpen={showModal}
              onConfirm={handleConfirmModal}
              onClose={handleCloseModal}
            />
          </div>
        </>
      );
    } else {
      //當List有內容
      return (
        <>
          <div className="card-list-container">
            {showResults.length > 0 &&
              showResults.map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.name}
                  publisher={item.publisher}
                  imageUrl={item.images[0].url}
                  description={item.description}
                  episodes={item.episodes}
                />
              ))}

            <AddCardModal
              isOpen={showModal}
              onConfirm={handleConfirmModal}
              onClose={handleCloseModal}
            />
          </div>
        </>
      );
    }
  };
  //我的最愛
  const getFavoriteContent = () => {
    if (!favoriteList || favoriteList.length === 0) {
      return (
        <>
          <div className="default">
            <img src={EmptyFolder} alt="EmptyFolder" />
            <span>您尚未收藏任何 Podcast</span>
          </div>
        </>
      );
    } else {
      //當List有內容
      return (
        <>
          <div className="favorite-list-container">
            {matchesEpisodes &&
              matchesEpisodes.map((episode, index) => (
                <ListItem
                  key={index}
                  item={episode}
                  activeEpisode={activeEpisode === episode.id}
                  handleClickListItem={() => handleClickListItem(episode.id)}
                  handleClickPlayer={() => handleClickPlayer(episode.id)}
                />
              ))}
          </div>
        </>
      );
    }
  };

  //Greeting
  const now = new Date();
  const getGreeting = () => {
    const hours = now.getHours();

    if (hours >= 5 && hours <= 12) {
      return "早安";
    } else if (hours >= 12 && hours <= 17) {
      return "午安";
    } else if (hours >= 17 || hours <= 5) {
      return "晚安";
    }
  };
  const greeting = getGreeting();

  return (
    <>
      <div className="content-container">
        <h1>{greeting}</h1>
        {activeList === 99 ? getFavoriteContent() : getCategoryContent()}
      </div>
    </>
  );
};

export default CardList;
