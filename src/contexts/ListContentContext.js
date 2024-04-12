// 新增 ListContentContext
import React, { createContext, useState, useContext } from "react";

const ListContentContext = createContext();
export const useListContent = () => useContext(ListContentContext);

const ListContentProvider = ({ children }) => {
  const [listContent, setListContent] = useState({
    commuteList: [
      // {
      //   title: "Siddhartha",
      //   type: "BBC World Service",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      // },
      // {
      //   title: "The Little Prince",
      //   type: "Ferrari",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      // },
      // {
      //   title: "Siddhartha",
      //   type: "BBC World Service",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      // },
      // {
      //   title: "The Little Prince",
      //   type: "Ferrari",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      // },
      // {
      //   title: "Siddhartha",
      //   type: "BBC World Service",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      // },
      // {
      //   title: "The Little Prince",
      //   type: "Ferrari",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      // },
      // {
      //   title: "Siddhartha",
      //   type: "BBC World Service",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      // },
      // {
      //   title: "The Little Prince",
      //   type: "Ferrari",
      //   imageUrl:
      //     "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      // },
    ],
    learnList: [],
    preSleepList: [],
    myPodcastList: [],
    myFavoriteList: [],
  });

  const [activeList, setActiveList] = useState("commuteList");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleClickList = (item) => {
    setActiveList(item);
  };

  // 與當前activeDropdown相同,則改為null,不同則改為value
  const handleClickDropdown = (dropdownName) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };

  // 將 Podcast 添加到指定的列表中
  const addPodcastToListContent = (listName, podcast) => {
    setListContent((prevListContent) => {
      const updatedListContent = { ...prevListContent };
      updatedListContent[listName] = [...updatedListContent[listName], podcast];
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
