// 新增 ListContentContext
import React, { createContext, useState, useContext } from "react";

const ListContentContext = createContext();
export const useListContent = () => useContext(ListContentContext);

const ListContentProvider = ({ children }) => {
  const [listContent, setListContent] = useState([
    {
      emoji: null,
      title: "通勤清單",
      list: [],
    },
    {
      emoji: null,
      title: "學習清單",
      list: [],
    },
    {
      emoji: null,
      title: "睡前清單",
      list: [],
    },
    {
      emoji: null,
      title: "我的Podcast",
      list: [],
    },
    { type: "favorite", emoji: null, title: "已收藏", list: [] },
  ]);

  const [activeList, setActiveList] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      // console.log(index, podcast, updatedListContent[index].list);

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
      }}
    >
      {children}
    </ListContentContext.Provider>
  );
};

export default ListContentProvider;
