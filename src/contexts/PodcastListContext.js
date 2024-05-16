import React, { createContext, useState, useContext, useEffect } from "react";
// import Swal from "sweetalert2";
import axios from "axios";
import {
  GetFavoriteIds,
  GetCategory,
  // CreateAccount,
  PostFavorite,
  RemoveFavorite,
  // deleteCategory,
  // putCategory,
  // addShowToCategory,
  AddCategory,
} from "../api/acAPI";
import {
  // getUserProfile,
  // getUserPlaylists,
  // getPlaylistTracks,
  getShowWithEpisodes,
  getShowEpisodes,
  getEpisode,
  // getUserShowList,
  // getArtistProfile,
  // searchShows,
} from "../api/spotify";
import {
  addFavoriteSuccess,
  removeFavoriteSuccess,
  addFavoriteFail,
  addFavoriteError,
  removeFavoriteFail,
  removeFavoriteError,
} from "../components/Swal";

const PodcastListContext = createContext();
export const usePodcastList = () => useContext(PodcastListContext);

const PodcastListProvider = ({ children }) => {
  const [channelList, setChannelList] = useState([]);
  const [categoryContent, setCategoryContent] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState([]);

  const [activeList, setActiveList] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [addCardModal, setAddCardModal] = useState(false);
  const [listActionModal, setListActionModal] = useState(false);

  const [currentAction, setCurrentAction] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const [activeEpisodeId, setActiveEpisodeId] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState({
    date: "2024-04-23",
    description:
      "✨好味聽眾專屬的優惠✨ 長輩最愛，回購率超高👉 https://fun-s.cc/好味小姐專屬優惠 母親節快來寵愛自己的媽咪🎉芳茲滴雞精回饋聽眾朋友 4/22-5/12滿額好禮有機會抽萬元好禮！ 平常媽媽總是在家忙進忙出 時常忙到沒有運動時間 趁著這次返鄉過母親節 送上一份能增加代謝的健康補給品 #日月養生薑黃滴雞精 ✅熟齡族最愛，滋補保養聖品 ✅三色薑黃素，促進新陳代謝 ✅總支鏈胺基酸，為你提振精神 距離母親節大概還有四週的時間 ✨為最愛的媽媽，補好雙效營養✨4/22-5/12芳茲母親節優惠活動 👉🏻滿 3,800 送 三風製麵 見面幸福麵線 1 包(200 公克/2 人份) 👉🏻滿 8,800 抽 日本製虎牌 多功能電子鍋 (價值$20,000) 👉🏻滿 15,888 送 NHB游離型金盞花葉黃素 1 瓶 (價值$1,580) #芳茲生技#芳茲薑黃滴雞精 #芳茲雞魚饗宴 -- Hosting provided by SoundOn",
    id: "2l2rRYeI9vuvvIFtzhzoQ0",
    imgSrc: "https://i.scdn.co/image/f40fdfa8f4162cf5cceba34373e0d52c36524b0e",
    title: "EP207 入魔眼藥水與社恐校友與可悲夜市",
    videoLength: 3837983,
  });
  //要映射的emoji
  const [categoryEmoji, setCategoryEmoji] = useState({});

  console.log("當前分類:", categoryContent[activeList]);
  //獲取映射emoji & channelList
  useEffect(() => {
    axios
      .get("http://localhost:3333/categoryEmoji")
      .then((response) => {
        setCategoryEmoji(response.data);
      })
      .catch((error) => console.error("獲取categoryEmoji出現錯誤:", error));
    // 獲取 channelList data
    axios
      .get("http://localhost:3333/channelList")
      .then((response) => {
        // 設置 channelList 狀態
        setChannelList(response.data);
      })
      .catch((error) => console.error("獲取channelList出現錯誤:", error));
  }, [setCategoryEmoji]);
  console.log("selectedCard:", selectedCard);
  // //避免 還沒獲取data 發生error
  // if (!Array.isArray(favoriteList) || favoriteList.length === 0) {
  //   return <div>Loading favorites or no favorites found...</div>;
  // }

  // //獲取db.json data
  // useEffect(() => {
  //   // // 獲取 categoryContent data
  //   // axios
  //   //   .get("http://localhost:3333/categoryContent")
  //   //   .then((response) => {
  //   //     // 設置 categoryContent 狀態
  //   //     setCategoryContent(response.data);
  //   //   })
  //   //   .catch((error) =>
  //   //     console.error("Error fetching category content:", error)
  //   //   );

  //   // // 獲取 favoriteList data
  //   // axios
  //   //   .get("http://localhost:3333/favoriteList")
  //   //   .then((response) => {
  //   //     // 設置 favoriteList 狀態
  //   //     setFavoriteList(response.data);
  //   //   })
  //   //   .catch((error) => console.error("Error fetching favorite list:", error));
  // }, []);

  //轉換時長單位
  const convertMsToHoursAndMinutes = (milliseconds) => {
    // 將毫秒數轉換為秒數
    const seconds = Math.floor(milliseconds / 1000);
    // 將秒數轉換為分鐘數
    const minutes = Math.floor(seconds / 60);
    // 計算剩餘的秒數
    const remainingSeconds = seconds % 60;
    // 將分鐘數轉換為小時數
    const hours = Math.floor(minutes / 60);
    // 計算剩餘的分鐘數
    const remainingMinutes = minutes % 60;

    return { hours, minutes: remainingMinutes, seconds: remainingSeconds };
  };

  //添加Shows & Episode 到 channelList (get spotify data)
  const handleGetShowEpisodes = async (id) => {
    try {
      const show = await getShowWithEpisodes(id);
      const episodes = await getShowEpisodes(id);
      // 將 episodes 添加到 show.episodes
      show.episodes = episodes;
      setChannelList((prevList) => [...prevList, show]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //將 episodeId set activeEpisode
  const handleClickListItem = (episodeId) => {
    console.log("active episodeId:", episodeId);
    setActiveEpisodeId(activeEpisodeId === episodeId ? null : episodeId);
  };

  //在 channelList 中查找id匹配的 episode
  const handleClickPlayer = (id) => {
    console.log("PlayerId", id);
    channelList.forEach((channel) => {
      const selectedEpisode = channel.episodes.find(
        (episode) => episode.id === id
      );
      if (selectedEpisode) {
        console.log(selectedEpisode);
        setCurrentPlayer(selectedEpisode);
        return;
      }
    });
  };

  const handleSelectedChannelClick = (podcast) => {
    setSelectedChannel(podcast);
  };

  //設置當前NavigationItem
  const handleNavigationItem = (index) => {
    setActiveList(index);
  };

  const handleClickDropdown = (index) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === index ? null : index
    );
  };

  // // 將 Podcast 添加到指定的列表中
  const addChannelToCategoryContent = () => {
    setCategoryContent((prevCategoryContent) => {
      const updatedCategoryContent = [...prevCategoryContent];

      // 確認目標類別存在並擁有 channelList 屬性
      const targetCategory = updatedCategoryContent[activeList];
      console.log(
        "SavedShows:",
        targetCategory && targetCategory.savedShows && targetCategory.savedShows
      );
      if (!targetCategory) {
        console.error("目標類別不存在");
        return updatedCategoryContent;
      }

      // 如果 SavedShows 不存在，則初始化為空陣列
      const currentSavedShows = targetCategory.savedShows || [];
      console.log("currentSavedShows:", currentSavedShows);

      // 檢查選取的頻道是否已經存在於目標類別的 savedShows 中
      const uniqueSelectedSavedShows = selectedChannel.filter((show) => {
        return !currentSavedShows.some((existingSavedShows) => {
          return existingSavedShows.id === show.id;
        });
      });

      // 將唯一的選取頻道添加到目標類別的 savedShows
      const updatedSavedShows = [
        ...currentSavedShows,
        ...uniqueSelectedSavedShows,
      ];

      updatedCategoryContent[activeList] = {
        ...targetCategory,
        savedShows: updatedSavedShows,
      };

      return updatedCategoryContent;
    });
  };

  // const addChannelToCategoryContent = async () => {
  //   try {
  //     const response = await addChannel({ activeList, selectedChannel });
  //     setCategoryContent(response.updatedCategoryContent);
  //   } catch (error) {
  //     console.error("Error adding channel to category:", error);
  //   }
  // };

  //待修正
  const handleDeleteChannel = (episodeId) => {
    console.log(episodeId);
    const updatedChannelList = categoryContent[activeList].savedShows.filter(
      (item) => item.id !== episodeId
    ); //從channelList內 篩選出 id!==video.id的item
    console.log(
      "這是activeList的channelList",
      categoryContent[activeList].savedShows,
      "這是filter後的chanelList",
      updatedChannelList
    );
    setCategoryContent((prevCategoryContent) => ({
      ...prevCategoryContent,
      [activeList]: {
        ...prevCategoryContent[activeList],
        savedShows: updatedChannelList,
      },
    }));
  };
  // const handleDeleteChannel = async (videoId) => {
  //   try {
  //     const response = await deleteChannel(videoId);
  //     setCategoryContent(response.updatedCategoryContent);
  //   } catch (error) {
  //     console.error("Error deleting channel:", error);
  //   }
  // };

  // const handleUpdateChannel = async (channelId, newData) => {
  //   try {
  //     const response = await updateChannel(channelId, newData);
  //     setCategoryContent(response.updatedCategoryContent);
  //   } catch (error) {
  //     console.error("Error updating channel:", error);
  //   }
  // };

  // addCardModal
  const handleOpenAddCardModal = () => {
    setAddCardModal(true);
  };

  const handleCloseAddCardModal = () => {
    setAddCardModal(false);
    setSelectedChannel([]);
  };

  //處理addCardModal
  const handleConfirmAddCardModal = (selectedShows) => {
    if (selectedShows.length > 0) {
      addChannelToCategoryContent(activeList, selectedShows);
      setAddCardModal(false);
      setSelectedChannel([]);
    }
  };

  //showMoreModal
  const handleOpenShowMoreModal = () => {
    setShowMoreModal(true);
  };

  const handleCloseShowMoreModal = () => {
    setShowMoreModal(false);
  };

  // listActionModal
  const handleOpenListActionModal = () => {
    setListActionModal(true);
  };

  const handleCloseListActionModal = () => {
    setListActionModal(false);
  };

  const handleEditInput = (event) => {
    setEditInput(event.target.value);
  };

  //設置action為setCurrentAction & openModal
  const handleActionClick = (action) => {
    setCurrentAction(action);
    handleOpenListActionModal();
  };

  //favoriteList 相關
  //episode 是否在 favoriteList內
  const isFavorite = (episodeId) => {
    return (
      favoriteList &&
      favoriteList.length !== 0 &&
      favoriteList.some((item) => item.id === episodeId)
    );
  };

  //添加收藏
  const handleAddFavorite = async (episodeId) => {
    try {
      const result = await PostFavorite(episodeId);
      result.success ? addFavoriteSuccess() : addFavoriteFail();
    } catch (error) {
      addFavoriteError();
    }
  };
  //移除收藏
  const handleRemoveFavorite = async (episodeId) => {
    try {
      const result = await RemoveFavorite(episodeId);
      result.success ? removeFavoriteSuccess() : removeFavoriteFail();
    } catch (error) {
      removeFavoriteError();
    }
  };

  //處理 書籤 在收藏? 移除 : 新增, 獲取更新的收藏清單
  const handleClickBookmark = async (episodeId) => {
    // 檢查最愛清單中是否有與點擊的影片相同的標題
    if (isFavorite(episodeId)) {
      await RemoveFavorite(episodeId);
      handleRemoveFavorite();
    } else {
      await PostFavorite(episodeId);
      handleAddFavorite();
    }
    const updatedFavorites = await GetFavoriteIds();
    setFavoriteList(updatedFavorites);
  };

  return (
    <PodcastListContext.Provider
      value={{
        channelList,
        setChannelList,

        selectedChannel,
        setSelectedChannel,
        handleSelectedChannelClick,

        categoryContent,
        setCategoryContent,

        favoriteList,
        setFavoriteList,

        activeList,
        setActiveList,
        handleNavigationItem,

        activeDropdown,
        setActiveDropdown,
        handleClickDropdown,

        listActionModal,
        handleOpenListActionModal,
        handleCloseListActionModal,

        addCardModal,
        setAddCardModal,
        handleOpenAddCardModal,
        handleCloseAddCardModal,
        handleConfirmAddCardModal,

        addChannelToCategoryContent,
        handleDeleteChannel,

        showMoreModal,
        setShowMoreModal,
        handleOpenShowMoreModal,
        handleCloseShowMoreModal,

        selectedCard,
        setSelectedCard,

        currentAction,
        handleActionClick,

        editInput,
        setEditInput,
        handleEditInput,

        // editListItem,
        // deleteNavigationItem,
        // addNavigationItem,
        isFavorite,
        handleClickBookmark,

        activeEpisodeId,
        setActiveEpisodeId,
        handleClickListItem,

        currentPlayer,
        setCurrentPlayer,
        handleClickPlayer,

        handleGetShowEpisodes,

        convertMsToHoursAndMinutes,

        chosenEmoji,
        setChosenEmoji,

        // handleInput,
        // handleEmoji,
        // handleRevise,

        categoryEmoji,
        setCategoryEmoji,

        // favoriteListEmoji,
        // setFavoriteListEmoji,
      }}
    >
      {children}
    </PodcastListContext.Provider>
  );
};

export default PodcastListProvider;
