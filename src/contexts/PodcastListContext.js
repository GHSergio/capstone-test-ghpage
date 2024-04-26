import React, { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
// import { addChannel, deleteChannel, updateChannel } from "../api/crud";

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

  const [currentPlayingTitle, setCurrentPlayingTitle] = useState(null);

  // 假設這個函數名為 fetchSpotifyAccessToken
  // const fetchSpotifyAccessToken = async () => {
  //   try {
  //     const response = await axios.post("YOUR_TOKEN_ENDPOINT_URL", {
  //       // 在這裡傳遞你的客戶端 ID、客戶端密鑰、授權碼和回調 URI
  //       client_id: "YOUR_CLIENT_ID",
  //       client_secret: "YOUR_CLIENT_SECRET",
  //       code: "AUTHORIZATION_CODE",
  //       redirect_uri: "YOUR_REDIRECT_URI",
  //       grant_type: "authorization_code",
  //     });

  //     // 從響應中獲取訪問令牌
  //     const accessToken = response.data.access_token;
  //     return accessToken;
  //   } catch (error) {
  //     // 處理錯誤
  //     console.error("Error fetching Spotify access token:", error);
  //     throw error;
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelList = await axios.get(
          "http://localhost:3333/channelList"
        );
        const categoryContent = await axios.get(
          "http://localhost:3333/categoryContent"
        );
        const favoriteList = await axios.get(
          "http://localhost:3333/favoriteList"
        );

        setChannelList(channelList.data);
        setCategoryContent(categoryContent.data);
        setFavoriteList(favoriteList.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickListItem = (title) => {
    setCurrentPlayingTitle(currentPlayingTitle === title ? null : title);
  };

  const handleClickPlayer = (title) => {
    setCurrentPlayingTitle(currentPlayingTitle === title ? null : title);
    console.log("currentPlayingTitle:" + currentPlayingTitle);
    console.log("title:" + title);
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

  //List action
  const editListItem = (index, newTitle) => {
    setCategoryContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      updatedListContent[index].title = newTitle;
      return updatedListContent;
    });
  };

  const deleteListItem = (index) => {
    setCategoryContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      updatedListContent.splice(index, 1);
      return updatedListContent;
    });
  };

  const addListItem = (newTitle) => {
    setCategoryContent((prevListContent) => {
      const newListItem = {
        emoji: "",
        title: newTitle,
        channelList: [],
      };
      return [...prevListContent, newListItem];
    });
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
  function addFavoriteFail() {
    Swal.fire({
      icon: "error",
      width: "250px",
      text: "加入收藏失敗  😢",
      heightAuto: false,
      position: "bottom-end",
      timer: 1000,
      showConfirmButton: false,
    });
  }
  function addFavoriteError() {
    Swal.fire({
      icon: "warning",
      width: "250px",
      text: "發生未知錯誤  🤔",
      heightAuto: false,
      position: "bottom-end",
      timer: 1000,
      showConfirmButton: false,
    });
  }

  const handleClickBookmark = (video) => {
    // 檢查最愛清單中是否有與點擊的影片相同的標題
    const isFavorite =
      favoriteList.videoList &&
      favoriteList.videoList.some((item) => item.title === video.title);

    // 如果該影片已經在最愛清單中，則將其移除
    if (isFavorite) {
      const updatedList =
        favoriteList.videoList &&
        favoriteList.videoList.filter((item) => item.title !== video.title);
      setFavoriteList((prevList) => ({
        ...prevList,
        videoList: updatedList,
      }));
      removeFavoriteSuccess();
    } else {
      // 如果該影片不在最愛清單中，則將其添加
      setFavoriteList((prevList) => ({
        ...prevList,
        videoList: [...prevList.videoList, video],
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

        editListItem,
        deleteListItem,
        addListItem,

        handleClickBookmark,

        currentPlayingTitle,
        handleClickListItem,
        handleClickPlayer,
      }}
    >
      {children}
    </PodcastListContext.Provider>
  );
};

export default PodcastListProvider;
