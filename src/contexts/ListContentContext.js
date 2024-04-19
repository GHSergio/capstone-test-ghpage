// // 新增 ListContentContext
// import React, { createContext, useState, useContext } from "react";
// import { usePodcastList } from "./PodcastListContext";

// const ListContentContext = createContext();
// export const useListContent = () => useContext(ListContentContext);

// const ListContentProvider = ({ children }) => {
//   // const [listContent, setListContent] = useState([
//   //   {
//   //     emoji: "🚌",
//   //     title: "通勤清單",
//   //     channel: [],
//   //   },
//   //   {
//   //     emoji: "📚",
//   //     title: "學習清單",
//   //     channel: [],
//   //   },
//   //   {
//   //     emoji: "💤",
//   //     title: "睡前清單",
//   //     channel: [],
//   //   },
//   //   {
//   //     emoji: "🏘️",
//   //     title: "我的Podcast",
//   //     channel: [],
//   //   },
//   //   { type: "favorite", emoji: "❤️", title: "已收藏video", list: [] },
//   // ]);

//   // const [activeList, setActiveList] = useState(0);
//   // const [activeDropdown, setActiveDropdown] = useState(null);
//   // const [listActionModal, setListActionModal] = useState(false);
//   // const [currentAction, setCurrentAction] = useState(null);
//   // const [editInput, setEditInput] = useState("");

//   // const handleClickList = (index) => {
//   //   setActiveList(index);
//   // };

//   // // 與當前activeDropdown相同,則改為null,不同則改為value
//   // // const handleClickDropdown = (dropdownName) => {
//   // //   setActiveDropdown((prevDropdown) =>
//   // //     prevDropdown === dropdownName ? null : dropdownName
//   // //   );
//   // // };

//   // const handleClickDropdown = (index) => {
//   //   setActiveDropdown((prevDropdown) =>
//   //     prevDropdown === index ? null : index
//   //   );
//   // };

//   // // 將 Podcast 添加到指定的列表中
//   // const addPodcastToListContent = (index, podcast) => {
//   //   setListContent((prevListContent) => {
//   //     const updatedListContent = [...prevListContent];

//   //     updatedListContent[index].list = [
//   //       ...updatedListContent[index].list,
//   //       ...podcast,
//   //     ];

//   //     return updatedListContent;
//   //   });
//   // };

//   // const handleOpenListActionModal = () => {
//   //   setListActionModal(true);
//   // };

//   // const handleCloseListActionModal = () => {
//   //   setListActionModal(false);
//   // };

//   // const handleEditInput = (event) => {
//   //   setEditInput(event.target.value);
//   // };

//   // //設置action為setCurrentAction & openModal
//   // const handleActionClick = (action) => {
//   //   setCurrentAction(action);
//   //   handleOpenListActionModal();
//   // };

//   // //List action
//   // const editListItem = (index, newTitle) => {
//   //   setListContent((prevListContent) => {
//   //     const updatedListContent = [...prevListContent];
//   //     updatedListContent[index].title = newTitle;
//   //     return updatedListContent;
//   //   });
//   // };

//   // const deleteListItem = (index) => {
//   //   setListContent((prevListContent) => {
//   //     const updatedListContent = [...prevListContent];
//   //     updatedListContent.splice(index, 1);
//   //     return updatedListContent;
//   //   });
//   // };

//   // const addListItem = (newTitle) => {
//   //   setListContent((prevListContent) => {
//   //     const newListItem = {
//   //       emoji: null,
//   //       title: newTitle,
//   //       list: [],
//   //     };
//   //     return [...prevListContent, newListItem];
//   //   });
//   // };

//   //更新  videoList 的 isFavorite屬性
//   const updatePodcastList = (prevPodcastList, videoTitle) => {
//     return prevPodcastList.map((podcast) => {
//       if (
//         podcast.videoList &&
//         podcast.videoList.some((video) => video.title === videoTitle)
//       ) {
//         return {
//           ...podcast,
//           videoList: podcast.videoList.map((video) =>
//             video.title === videoTitle
//               ? { ...video, isFavorite: !video.isFavorite }
//               : video
//           ),
//         };
//       }
//       return podcast;
//     });
//   };

//   const updateListContent = (prevListContent, videoTitle) => {
//     return prevListContent.map((listItem) => {
//       if (listItem.list.title && listItem.list.title === videoTitle) {
//         return {
//           ...listItem,
//           list: listItem.list.map((item) =>
//             item.title === videoTitle
//               ? { ...item, isFavorite: !item.isFavorite }
//               : item
//           ),
//         };
//       }
//       return listItem;
//     });
//   };

//   console.log(
//     listContent[0].list && listContent[0].list[0].videoList[0].isFavorite
//   );

//   const toggleFavoriteItem = (video) => {
//     setListContent((prevPodcastList) =>
//       updateListContent(prevPodcastList, video.title)
//     );
//     setPodcastList((prevPodcastList) =>
//       updatePodcastList(prevPodcastList, video.title)
//     );
//   };

//   // console.log(
//   //   podcastList[0].videoList[0].isFavorite,
//   //   podcastList[0].videoList[1].isFavorite,
//   //   podcastList[0].videoList[2].isFavorite
//   // );

//   return (
//     <ListContentContext.Provider
//       value={{
//         listContent,
//         setListContent,

//         activeList,
//         setActiveList,
//         handleClickList,

//         activeDropdown,
//         setActiveDropdown,
//         handleClickDropdown,

//         addPodcastToListContent,

//         listActionModal,
//         handleOpenListActionModal,
//         handleCloseListActionModal,

//         currentAction,
//         handleActionClick,

//         editInput,
//         setEditInput,
//         handleEditInput,

//         editListItem,
//         deleteListItem,
//         addListItem,

//         toggleFavoriteItem,
//       }}
//     >
//       {children}
//     </ListContentContext.Provider>
//   );
// };

// export default ListContentProvider;
