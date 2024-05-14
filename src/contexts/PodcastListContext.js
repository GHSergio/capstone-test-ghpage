import React, { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {
  GetFavoriteIds,
  GetCategory,
  // CreateAccount,
  // PostFavorite,
  // RemoveFavorite,
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

const PodcastListContext = createContext();
export const usePodcastList = () => useContext(PodcastListContext);

const PodcastListProvider = ({ children }) => {
  const [channelList, setChannelList] = useState([]);
  const [categoryContent, setCategoryContent] = useState([]);
  const [favoriteList, setFavoriteList] = useState({});
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

  const [activeEpisode, setActiveEpisode] = useState(null);
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

  // console.log("當前分類:", categoryContent[activeList]);
  // console.log("categoryEmoji:", categoryEmoji);
  //獲取映射emoji
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

  // //獲取db.json data
  // useEffect(() => {
  //   // 獲取 channelList data
  //   axios
  //     .get("http://localhost:3333/channelList")
  //     .then((response) => {
  //       // 設置 channelList 狀態
  //       setChannelList(response.data);
  //     })
  //     .catch((error) => console.error("Error fetching channel list:", error));

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

  //符合 episodeId 則 active
  const handleClickListItem = (episodeId) => {
    setActiveEpisode(activeEpisode === episodeId ? null : episodeId);
  };

  // //代入id 取得 episode data 並 setCurrentPlayer
  // const handleClickPlayer = async (Episode) => {
  //   try {
  //     const spotifyToken = localStorage.getItem("access_token");
  //     // console.log("spotifyToken:", spotifyToken);
  //     if (!spotifyToken) {
  //       console.error("Access token not found in localStorage");
  //       return;
  //     }

  //     const selectedEpisodeData = await getEpisode(Episode);
  //     setCurrentPlayer(selectedEpisodeData);
  //   } catch (error) {
  //     console.error("Error fetching episode:", error);
  //   }
  // };

  //在 channelList 中查找id匹配的 episode
  const handleClickPlayer = (id) => {
    channelList.forEach((channel) => {
      const selectedEpisode = channel.episodes.find(
        (episode) => episode.id === id
      );
      if (selectedEpisode) {
        setCurrentPlayer(selectedEpisode);
        return;
      }
    });
  };

  const handleSelectedChannelClick = (podcast) => {
    setSelectedChannel(podcast);
  };

  const handleClickList = (index) => {
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
        targetCategory &&
          targetCategory.channelList &&
          targetCategory.channelList
      );
      if (!targetCategory) {
        console.error("目標類別不存在");
        return updatedCategoryContent;
      }

      // 如果 channelList 不存在，則初始化為空陣列
      const currentChannelList = targetCategory.channelList || [];
      console.log("currentChannelList:", currentChannelList);

      // 檢查選取的頻道是否已經存在於目標類別的 channelList 中
      const uniqueSelectedChannel = selectedChannel.filter((channel) => {
        return !currentChannelList.some((existingChannel) => {
          return existingChannel.id === channel.id;
        });
      });

      // 將唯一的選取頻道添加到目標類別的 channelList 中
      const updatedChannelList = [
        ...currentChannelList,
        ...uniqueSelectedChannel,
      ];

      updatedCategoryContent[activeList] = {
        ...targetCategory,
        channelList: updatedChannelList,
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
  const handleDeleteChannel = (videoId) => {
    console.log(videoId);
    const updatedChannelList = categoryContent[activeList].channelList.filter(
      (item) => item.id !== videoId
    ); //從channelList內 篩選出 id!==video.id的item
    console.log(
      "這是activeList的channelList",
      categoryContent[activeList].channelList,
      "這是filter後的chanelList",
      updatedChannelList
    );
    setCategoryContent((prevCategoryContent) => ({
      ...prevCategoryContent,
      [activeList]: {
        ...prevCategoryContent[activeList],
        channelList: updatedChannelList,
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

  const handleConfirmAddCardModal = (selectedChannel) => {
    if (selectedChannel.length > 0) {
      addChannelToCategoryContent(activeList, selectedChannel);
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

  // //更新emoji
  // const handleEmojiUpdate = (categoryId, newEmoji) => {
  //   const newCategoryEmoji = {
  //     ...categoryEmoji,
  //     [categoryId]: newEmoji,
  //   };
  //   setCategoryEmoji(newCategoryEmoji);
  // };

  //category action
  // const editListItem = async (index, newTitle, newEmoji) => {
  //   const category = categoryContent[index];
  //   const updateResult = await putCategory({
  //     categoriesId: category.id,
  //     name: newTitle,
  //   });

  //   handleEmojiUpdate(category.id, newEmoji); // 使用 category.id 而非 index

  //   if (updateResult === "success") {
  //     // 更新本地分類清單狀態
  //     setCategoryContent((prevListContent) =>
  //       prevListContent.map((item, idx) => {
  //         if (idx === index) {
  //           return { ...item, name: newTitle, emoji: newEmoji };
  //         }
  //         return item;
  //       })
  //     );
  //   } else {
  //     console.error("Failed to update category name");
  //   }
  // };

  console.log("categoryEmoji:", categoryEmoji);

  const deleteListItem = (index) => {
    setCategoryContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      updatedListContent.splice(index, 1);
      return updatedListContent;
    });
  };

  // const addListItem = (newTitle, newEmoji) => {
  //   // AddCategory(newTitle);
  //   setCategoryContent((prevListContent) => {
  //     const newListItem = {
  //       id: categoryContent.length + 1,
  //       emoji: newEmoji,
  //       title: newTitle,
  //       channelList: [],
  //     };
  //     return [...prevListContent, newListItem];
  //   });
  // };

  const addListItem = async (newTitle) => {
    try {
      // 從 emoji 映射表中獲取相應的 emoji 符號
      const emoji = chosenEmoji;
      console.log(chosenEmoji);
      // 調用新增分類的 API，傳遞名稱和 emoji 參數
      const result = await AddCategory({ name: newTitle, emoji: emoji });
      if (result === "success") {
        // 如果成功新增分類，更新你的 UI 或做其他必要的處理
        console.log("成功新增分類:", newTitle);
        // 重新獲取最新的分類清單並更新 UI
        const userCategoryContent = await GetCategory();
        setCategoryContent(userCategoryContent);
      } else {
        console.log("新增分類失敗");
      }
    } catch (error) {
      console.error("新增分類時出現錯誤:", error);
    }
  };

  // Swal
  function addFavoriteSuccess() {
    Swal.fire({
      icon: "success",
      width: "250px",
      text: "成功加入收藏  😊",
      heightAuto: false,
      position: "bottom-end",
      timer: 1000,
      showConfirmButton: false,
    });
  }
  function removeFavoriteSuccess() {
    Swal.fire({
      icon: "success",
      width: "250px",
      text: "成功移除收藏  😊",
      heightAuto: false,
      position: "bottom-end",
      timer: 1000,
      showConfirmButton: false,
    });
  }
  // function addFavoriteFail() {
  //   Swal.fire({
  //     icon: "error",
  //     width: "250px",
  //     text: "加入收藏失敗  😢",
  //     heightAuto: false,
  //     position: "bottom-end",
  //     timer: 1000,
  //     showConfirmButton: false,
  //   });
  // }
  // function addFavoriteError() {
  //   Swal.fire({
  //     icon: "warning",
  //     width: "250px",
  //     text: "發生未知錯誤  🤔",
  //     heightAuto: false,
  //     position: "bottom-end",
  //     timer: 1000,
  //     showConfirmButton: false,
  //   });
  // }

  const handleClickBookmark = (episode) => {
    // 檢查最愛清單中是否有與點擊的影片相同的標題
    const isFavorite =
      favoriteList.episodes &&
      favoriteList.episodes.some((item) => item.title === episode.title);

    // 如果該影片已經在最愛清單中，則將其移除
    if (isFavorite) {
      const updatedList =
        favoriteList.episodes &&
        favoriteList.episodes.filter((item) => item.title !== episode.title);
      setFavoriteList((prevList) => ({
        ...prevList,
        episodes: updatedList,
      }));
      removeFavoriteSuccess();
    } else {
      // 如果該影片不在最愛清單中，則將其添加
      setFavoriteList((prevList) => ({
        ...prevList,
        episodes: [...prevList.episodes, episode],
      }));

      addFavoriteSuccess();
      // addFavoriteFail();
      // addFavoriteError();
    }
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
        handleClickList,

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
        deleteListItem,
        addListItem,

        handleClickBookmark,

        activeEpisode,
        setActiveEpisode,
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
