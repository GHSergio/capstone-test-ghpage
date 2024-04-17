import React, { createContext, useState, useContext } from "react";

const PodcastListContext = createContext();
export const usePodcastList = () => useContext(PodcastListContext);

const PodcastListProvider = ({ children }) => {
  const [podcastList, setPodcastList] = useState([
    {
      id: 1,
      title: "Siddhartha",
      type: "BBC World Service",
      description:
        "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      active: false,
      videoList: [
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/6061/c90b/b239aa208ff9d16f9f1dd09f391760e7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od6GalLLgkhuEhRxrxO7YNpyslof0TgEH5VWKmANasXjULkJ-ly6irl0dguFlqUQSQxzgM04kyLFCPFgKH0O1--R0MRgmN7yVtCxQjvVVezzmXuq6D~RBMwl02VQmjjrzbQ~OwtHSSESAM~Q98FUJTuJIe05baqvE8fbfPlNNit3n~ERuNsmE~yaBbUGt6ux-~xrTNrN0l5rJDAZTpfmEO~UVn7f9DqYxnJy5tDoBB5oqX~9g7UxqqIg~aerXw~tz~4r3f2ShJctGfj0gOuKuSVguKuAXD2B9lA0vWNzZ7SEGt00ET3NDyGbj47P~NMkgms3955lV80~jjmn8jadeQ__",
          title:
            "A Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-06",
          duration: "1 小時 20 分",
          isFavorite: false,
        },
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/a6cb/eee7/31add6e3e5e02f69f231753932b79b9b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF9uORM7n1wL3JQlFlrbmrPlpCseaBBPzByWUG1BWr-~JmBreyW1HlkWESIrdgRtAs5-vB9rCV1UetTV~jHfTbqVwFJcSM7222GSxz9s3KOAH~783ZRwduf8~eKIDS5scBNDBBhCV2XGeTtydqdFDNcqqHeNNFdyRWtywp~nwPfg6klm~9Fa1MeAqvAj1U7x-eTrDjW1rSsKVHLo9msdgv~8DQhXwCKaanYsmzPNZvUUwaS~BK8nVUNBTF4w~TV6E-6ggGsWg-poNJ2AqpVhe9ml8lxBDqwHOxHGBSZNGxO4hSTjP4tEV7CfhjW2FPmg~NYRuSGqFpxL9NCIX8dYJA__",
          title:
            "B Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-07",
          duration: "1 小時 30 分",
          isFavorite: false,
        },
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/5aa1/4d41/4a9b4213651cc1dbfbadd29c1e864258?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlJ8jEm8VthMMEIuERDMzA8YWW~fviRoeYPCpRaGkj7gPOf~~aTObI3bTCKd8~kkHx~WfS4~2fwCjqCH~5LfzhuO5C8gEdqN9t5EY8hZskZxP72C4EPwb3AwpGImkilcL3end3q1tWL-DIHHMdklEeZ4HnD9d2t-NKJqOv8c6OuEMmZHVR3cLsuuUiCOwm5VHjsv0JBEfgpOA~PAtnIzLuVRYOB0C5hvLw-GWVnMcRbBWIWITJdKRUQGRHSogYgrxJ4Us~fXRHtPR3r6l2chXNUqooShgC0YQ5EP9GfU6MPafXi1YE5RkPmheSXLm56LeUd92N9R8XqNX-HNm05ltQ__",
          title:
            "C Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-08",
          duration: "1 小時 40 分",
          isFavorite: false,
        },
      ],
    },
    {
      id: 2,
      title: "The Little Prince",
      type: "Ferrari",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      active: false,
      videoList: [],
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      type: "Facebook",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/ca98/44a3/2d66d48f7b209451f874429e10b79f73?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3sNkZCz0pZ2lZWflUAooWKe3MjERCbbxtw-84iZ0myXZvKmJb47Rr8I0nCG0HsPz7MGJIi5jW5R5ArTj0m358EHLfiE4cP2VMoSQt8GHE~hXFRr4VWpAdYRay-bm9umkZsVkcqMh36E~oTHAdVSz6m5fttDfMcuDfULSaG-D4Oq9vnP8d6m4DzEJS0XOhBIu-IoasuNvG-EyNop~Lv~VSRTyUa7Dno~QHdAIHlwaJ94utiMuFOWyoS6fv5p1pWOFuLlwqjtyOrGj8m37n~bHyi4kBUHg6-eSfM~gTm9KzXKWyfWOsJPlvngF1wQ01i4~LmxNVhkJBB31khWmw8OAw__",
      active: false,
    },
    {
      id: 4,
      title: "The Alchemist",
      type: "Gillette",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/953a/827c/2b112095494c4af2468fc4e5eb14cb45?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0i-mb1JnQy8dEhXoJfGi5xzlbB7w1pSS8skWo~TX5Do5jsOazBz-yFopH85DgPFRFPciuDRHAhx5SDj6kuAIVQtqygC4F2MnGAZ7t97ivoOcxp4X7jY3bh-LUoXrxy3nglP5knCPKN6Pcc6RPG-jt4QbTb3vnfmAnma8Qr8MjCtTps4qiRvfLi1hgJgxrhHazeBocBzOQ31g6yAQw1dOKbl9qDmqbDV1XCHCMR8-b5sld2Z3DDffqu3Ci~PMt5OvsN3Dvryiiyjd1XyU7LwWM2Pv3p8yKReJLFnt3lw0aBA3AEMet4f-LiCWKjmRnf-q5FYExI4bv55iLiSP6Js1g__",
      active: false,
    },
    {
      id: 5,
      title: "A Game of Thrones",
      type: "eBay",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6804/b0eb/cdeeb4f7103a19daf9115788f7245b5f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4EGth5-TAewPAKZdh2pvkyNEqezrjzxJhb4P7qpokg4sTBDpN5D0X6lYRjJTr3XSK9tISwgautIYsgVzP79XUzWF6y6SYZ2oo5YRwvj2wUkFV5xuhb6J5PXPJ~sl3oCc6f1cZY~N6wXV5qEoVIrXMYLycNgDfOFu3097PCqHHbIuNYnoBNNyzB-1NcYU7kyD~kWX5L6xNBjenM~228Q7ULnYNS02V2AMzq6uLCQTOU-EZNpS6a4XXVIZ3Ahm5boWYJxJte6PGh7qGM6POJanZ7O16cvBCWoLNA6hnZwVNkudVxFJlUwwt7pIrOHJ8vfcVscx5RraqMTFI60Rfghvg__",
      active: false,
    },
    {
      id: 6,
      title: "The Count of Monte Cristo",
      type: "General Electric",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      active: false,
    },

    {
      id: 7,
      title: "Siddhartha",
      type: "BBC World Service",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0c4c/9aa3/8072fb4d1b5309a90e03380e149fa83d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGB8GdkQghiKUY5LBwe3PMZCEcWcB3h8TF8McEgqlN1pgkRuxlxXfNuUEAeSE6kuLDWK7zRbUxdRAeE73YIeS1KY5EtgZd62SJLPWjNZ7aenaRA6mZdfaJyLWCbYekKF0~UsT0Dcr30VDxcg6eY0P6tBnCaBj~ceb19bn7OMNL~~9jem0jKnckhqsWSZtSTlYel8gPKqdcNWxtpc5rfDsRgOOqbdtS6tKeLCO~MrZkMGqp4zSW7V6IG1lrcZYWb2KzVSu02dI8SCu7jTA4jR~QDWtyUrDk-9UsW-Oqhsc0FnaEd0R2cEYY3IlfGXS3cNuVGTMujaMcjPZHY5P~FmFQ__",
      active: false,
    },
    {
      id: 8,
      title: "The Little Prince",
      type: "Ferrari",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      active: false,
    },
    {
      id: 9,
      title: "To Kill a Mockingbird",
      type: "Facebook",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/ca98/44a3/2d66d48f7b209451f874429e10b79f73?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3sNkZCz0pZ2lZWflUAooWKe3MjERCbbxtw-84iZ0myXZvKmJb47Rr8I0nCG0HsPz7MGJIi5jW5R5ArTj0m358EHLfiE4cP2VMoSQt8GHE~hXFRr4VWpAdYRay-bm9umkZsVkcqMh36E~oTHAdVSz6m5fttDfMcuDfULSaG-D4Oq9vnP8d6m4DzEJS0XOhBIu-IoasuNvG-EyNop~Lv~VSRTyUa7Dno~QHdAIHlwaJ94utiMuFOWyoS6fv5p1pWOFuLlwqjtyOrGj8m37n~bHyi4kBUHg6-eSfM~gTm9KzXKWyfWOsJPlvngF1wQ01i4~LmxNVhkJBB31khWmw8OAw__",
      active: false,
    },
    {
      id: 10,
      title: "The Alchemist",
      type: "Gillette",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/953a/827c/2b112095494c4af2468fc4e5eb14cb45?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0i-mb1JnQy8dEhXoJfGi5xzlbB7w1pSS8skWo~TX5Do5jsOazBz-yFopH85DgPFRFPciuDRHAhx5SDj6kuAIVQtqygC4F2MnGAZ7t97ivoOcxp4X7jY3bh-LUoXrxy3nglP5knCPKN6Pcc6RPG-jt4QbTb3vnfmAnma8Qr8MjCtTps4qiRvfLi1hgJgxrhHazeBocBzOQ31g6yAQw1dOKbl9qDmqbDV1XCHCMR8-b5sld2Z3DDffqu3Ci~PMt5OvsN3Dvryiiyjd1XyU7LwWM2Pv3p8yKReJLFnt3lw0aBA3AEMet4f-LiCWKjmRnf-q5FYExI4bv55iLiSP6Js1g__",
      active: false,
    },
    {
      id: 11,
      title: "A Game of Thrones",
      type: "eBay",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6804/b0eb/cdeeb4f7103a19daf9115788f7245b5f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4EGth5-TAewPAKZdh2pvkyNEqezrjzxJhb4P7qpokg4sTBDpN5D0X6lYRjJTr3XSK9tISwgautIYsgVzP79XUzWF6y6SYZ2oo5YRwvj2wUkFV5xuhb6J5PXPJ~sl3oCc6f1cZY~N6wXV5qEoVIrXMYLycNgDfOFu3097PCqHHbIuNYnoBNNyzB-1NcYU7kyD~kWX5L6xNBjenM~228Q7ULnYNS02V2AMzq6uLCQTOU-EZNpS6a4XXVIZ3Ahm5boWYJxJte6PGh7qGM6POJanZ7O16cvBCWoLNA6hnZwVNkudVxFJlUwwt7pIrOHJ8vfcVscx5RraqMTFI60Rfghvg__",
      active: false,
    },
    {
      id: 12,
      title: "The Count of Monte Cristo",
      type: "General Electric",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/979f/9988/5cda25d6699dc018a47ba0af45341a28?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOJizmfNrcQpI2P1fqkuujn4jXuVgfx~PmuvGHBFR-J0AdxvlBeTcDbLkR9l78NDxbyaYcPuutJ67FSnp0XlySVnpSVEef1yhkOYlswge96fTq7Qg~uZ7o22iGKjIYnVMKVN5ZhH-RTS9l-XcbyTVGBxCCb2vZOd32mYYva9q2TEnwW2Fv7TZjDncS5RhiE~9HhsGeWrDSBWfY78ddMbR6sOAGq5tIRQGviV0M3QwdOQyQ0~24YPH3C64eXLmubDV3EGjArL6Ez4Pc~tLg6NZnixLHgoRpXi3HDOsz09rrL-lOH-SAeno4pm3Pg5KCtXoNLLV5ziV1Dn6UMmcDoIBw__",
      active: false,
    },
  ]);
  const [selectedPodcasts, setSelectedPodcasts] = useState([]);
  const [showMoreModal, setShowMoreModal] = useState(false);

  const handlePodcastClick = (podcast) => {
    setSelectedPodcasts(podcast);
  };

  const handleOpenShowMoreModal = () => {
    setShowMoreModal(true);
  };

  const handleCloseShowMoreModal = () => {
    setShowMoreModal(false);
  };

  return (
    <PodcastListContext.Provider
      value={{
        podcastList,
        setPodcastList,

        selectedPodcasts,
        setSelectedPodcasts,
        handlePodcastClick,

        showMoreModal,
        setShowMoreModal,
        handleOpenShowMoreModal,
        handleCloseShowMoreModal,
      }}
    >
      {children}
    </PodcastListContext.Provider>
  );
};

export default PodcastListProvider;
