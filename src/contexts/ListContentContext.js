// 新增 ListContentContext
import React, { createContext, useState, useContext } from "react";

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
    { type: "favorite", emoji: "❤️", title: "已收藏", list: [] },
  ]);

  const [activeList, setActiveList] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [listActionModal, setListActionModal] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [newItemInput, setNewItemInput] = useState("");

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

  const handleNewItemInput = (event) => {
    setNewItemInput(event.target.value);
  };

  //currentAction
  const handleActionClick = (action) => {
    setCurrentAction(action);
    handleOpenListActionModal();
  };

  // console.log("editInput:", editInput, "newItemInput:", newItemInput);
  //action  add接收不到newTitle
  const manageListItem = (action, index, newTitle, editInput, newItemInput) => {
    console.log(
      "action:",
      [action],
      "newTitle:",
      [newTitle],
      "editInput:",
      [editInput],
      "newItemInput",
      [newItemInput]
    );

    setListContent((prevListContent) => {
      const updatedListContent = [...prevListContent];
      switch (action) {
        case "edit":
          updatedListContent[index].title = newTitle;
          // updatedListContent[index].title = editInput;
          console.log("newTitle:", [newTitle], "editInput:", [editInput]);
          break;

        case "delete":
          updatedListContent.splice(index, 1);
          break;

        case "add":
          const newListItem = {
            emoji: null,
            title: newItemInput,
            list: [],
          };

          updatedListContent.push(newListItem);
          console.log("newListItem:", [newListItem], "newTitle:", [newTitle]);
          break;

        default:
          console.error("Invalid action");
      }
      return updatedListContent;
    });
  };

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
        manageListItem,

        currentAction,
        handleActionClick,

        editInput,
        setEditInput,
        handleEditInput,

        newItemInput,
        setNewItemInput,
        handleNewItemInput,
      }}
    >
      {children}
    </ListContentContext.Provider>
  );
};

export default ListContentProvider;
