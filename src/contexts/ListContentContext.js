// 新增 ListContentContext
import React, { createContext, useState, useContext } from "react";
import { usePodcastList } from "./PodcastListContext";

const ListContentContext = createContext();
export const useListContent = () => useContext(ListContentContext);

const ListContentProvider = ({ children }) => {
  const [listContent, setListContent] = useState([
    {
      emoji: "🚌",
      title: "通勤清單",
      list: [],
    },
    {
      emoji: "📚",
      title: "學習清單",
      list: [],
    },
    {
      emoji: "💤",
      title: "睡前清單",
      list: [],
    },
    {
      emoji: "🏘️",
      title: "我的Podcast",
      list: [],
    },
    { type: "favorite", emoji: "❤️", title: "已收藏video", list: [] },
  ]);

  const [activeList, setActiveList] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [listActionModal, setListActionModal] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [editInput, setEditInput] = useState("");

  const { podcastList, setPodcastList } = usePodcastList();

  const handleClickList = (index) => {
    setActiveList(index);
  };

  // 與當前activeDropdown相同,則改為null,不同則改為value
  // const handleClickDropdown = (dropdownName) => {
  //   setActiveDropdown((prevDropdown) =>
  //     prevDropdown === dropdownName ? null : dropdownName
  //   );
  // };

  const handleClickDropdown = (index) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === index ? null : index
    );
  };

  // 將 Podcast 添加到指定的列表中
  const addPodcastToListContent = (index, podcast) => {
    setListContent((prevListContent) => {
      const updatedListContent = [...prevListContent];

      updatedListContent[index].list = [
        ...updatedListContent[index].list,
        ...podcast,
      ];

      return updatedListContent;
    });
  };

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
    setListContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      updatedListContent[index].title = newTitle;
      return updatedListContent;
    });
  };

  const deleteListItem = (index) => {
    setListContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      updatedListContent.splice(index, 1);
      return updatedListContent;
    });
  };

  const addListItem = (newTitle) => {
    setListContent((prevListContent) => {
      const newListItem = {
        emoji: null,
        title: newTitle,
        list: [],
      };
      return [...prevListContent, newListItem];
    });
  };

  //更新  videoList 的 isFavorite屬性
  const updatePodcastList = (prevPodcastList, videoTitle) => {
    return prevPodcastList.map((podcast) => {
      if (
        podcast.videoList &&
        podcast.videoList.some((video) => video.title === videoTitle)
      ) {
        return {
          ...podcast,
          videoList: podcast.videoList.map((video) =>
            video.title === videoTitle ? { ...video, isFavorite: true } : video
          ),
        };
      }
      return podcast;
    });
  };

  // console.log(podcastList[0].videoList[0].isFavorite);
  // console.log(podcastList[0].videoList[1].isFavorite);
  // console.log(podcastList[0].videoList[2].isFavorite);

  // 添加一個新的參數，以便向已收藏清單中添加 video
  const addFavoriteItem = (video) => {
    setListContent((prevListContent) => {
      const isAlreadyFavorite = prevListContent[4].list.some(
        (item) => item.title === video.title
      );
      // 將 video 添加到已收藏清單的 list 中
      if (!isAlreadyFavorite) {
        const updatedListContent = [...prevListContent];
        updatedListContent[4].list = [
          ...updatedListContent[4].list,
          { ...video, isFavorite: true },
        ];
        // 同時更新 PodcastList 中的狀態
        setPodcastList((prevPodcastList) =>
          updatePodcastList(prevPodcastList, video.title)
        );

        return updatedListContent;
      } else {
        // 如果video已經在已收藏清單中，則不執行任何操作
        return prevListContent;
      }
    });
  };

  console.log(listContent[4].list);

  return (
    <ListContentContext.Provider
      value={{
        listContent,
        setListContent,

        activeList,
        setActiveList,
        handleClickList,

        activeDropdown,
        setActiveDropdown,
        handleClickDropdown,

        addPodcastToListContent,

        listActionModal,
        handleOpenListActionModal,
        handleCloseListActionModal,

        currentAction,
        handleActionClick,

        editInput,
        setEditInput,
        handleEditInput,

        editListItem,
        deleteListItem,
        addListItem,

        addFavoriteItem,
      }}
    >
      {children}
    </ListContentContext.Provider>
  );
};

export default ListContentProvider;
