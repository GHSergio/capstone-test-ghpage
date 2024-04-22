import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";

const PodcastListContext = createContext();
export const usePodcastList = () => useContext(PodcastListContext);

const PodcastListProvider = ({ children }) => {
  const [channelList, setChannelList] = useState([
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
        },
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/22ed/573d/f24340ce94b8f0e31079a53749fa8175?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YejBJ1zeSjOZK5jIV4aqjEn-iNKT8voFZcrMX~mdpcS9iqLED57a4ix2uaXRPWzn5R0PCMJE9ZLgGkz25OnPNCOtY49LAmmVXSDsGcN1YsXPktzviOwE1HxjW28wSFikXOZ55W1sH9O3buSeWSKFRhyp2lkZg2Br1pz8seB4ldR6YFnYFN~g0x6WEfFs5ieQO8DW4~smTvzJleEUFCz60cShtlrFl1bqfJvDEN8c2IWgOIksh00uFnoLUosCM9SFTU9Pkq1eD2Luoskjv6L3KSe3OpnLRgEoC2uZbn~ZywUXQ-~Kb7bUj3BDt216SPJKdo35QUITlgnXhTYUTbnaNA__",
          title:
            "D Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-06",
          duration: "1 小時 20 分",
        },
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/a3e6/56f1/29cb67ae3e0f5ddacdccc345caf736f1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XuBk4n~Vnk1729Op0aCjHLiAx0s3buH9UFz5sSIxVgBjG7pIrJRSChfHXyhvPtdITfZ3kOK3O8gxfgNPBMGardLEKOlzAV3zURuHLXLoRhMLHsFYmJUpJAaCDd8RvLJ1jMfcKJTHknCDYd44Pif9YEl54zoho--Rkk1glDOqUoyJ00whyqBLHuCjY3WUrM52KbtERjLiRHhwIWA6yyUjSzWY~4Ne8VTDLh3SEfTEKqBRvgDsrXWJcOcK71LeVwIhYj1wCfFwg9WjoY-bfdaPujjqtve5DJ5k2ktXGr3dXm5peM4QVptKmoPlvAyfECJEcH3iJZijKIAFrJa~MjzbyA__",
          title:
            "E Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-07",
          duration: "1 小時 30 分",
        },
        {
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/119a/8489/79edaadc3bd08a903a2a69ec323f624f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqbeUz8HSjEFYB2gBVxTiid1U39eRynjybuzGcJ4WroTHl8VBXEKWy6fQnuWy3Ksst7ezaQBi1NZSHKpiyq6-hMfxYWyzMPWNqcozppGO-yUc6gSs5ybBv6bTBD5WuYnLJeIlldstujWC-7oTjnEx3dojisZ5IYDTj1UYO-aNZ6XFNMq6JPAf6EeY3XQagPQWi1Z3lmb7qAOGFH1ZFGylFlY1Hp4HChtBgsP-Ce7pkZDMwE-eph2zp1vsdkOv53oCMP7QUJnb-YZIV1sLRsF23COM3RR2yl0F2lG~e8kXfKbhhcenCYQl0V3-7UIHo7VQmyyUkm8ByPgRSVwHnzrig__",
          title:
            "F Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
          description:
            "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
          date: "2023-04-08",
          duration: "1 小時 40 分",
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
  const [selectedChannel, setSelectedChannel] = useState([]);
  const [categoryContent, setCategoryContent] = useState([
    {
      emoji: "🚌",
      title: "通勤清單",
      channelList: [],
    },
    {
      emoji: "📚",
      title: "學習清單",
      channelList: [],
    },
    {
      emoji: "💤",
      title: "睡前清單",
      channelList: [],
    },
    {
      emoji: "🏘️",
      title: "我的Podcast",
      channelList: [],
    },
    // {
    //   type: "favorite",
    //   emoji: "❤️",
    //   title: "已收藏video",
    //   channelList: [
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/6061/c90b/b239aa208ff9d16f9f1dd09f391760e7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od6GalLLgkhuEhRxrxO7YNpyslof0TgEH5VWKmANasXjULkJ-ly6irl0dguFlqUQSQxzgM04kyLFCPFgKH0O1--R0MRgmN7yVtCxQjvVVezzmXuq6D~RBMwl02VQmjjrzbQ~OwtHSSESAM~Q98FUJTuJIe05baqvE8fbfPlNNit3n~ERuNsmE~yaBbUGt6ux-~xrTNrN0l5rJDAZTpfmEO~UVn7f9DqYxnJy5tDoBB5oqX~9g7UxqqIg~aerXw~tz~4r3f2ShJctGfj0gOuKuSVguKuAXD2B9lA0vWNzZ7SEGt00ET3NDyGbj47P~NMkgms3955lV80~jjmn8jadeQ__",
    //       title:
    //         "A Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-06",
    //       duration: "1 小時 20 分",
    //     },
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/a6cb/eee7/31add6e3e5e02f69f231753932b79b9b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF9uORM7n1wL3JQlFlrbmrPlpCseaBBPzByWUG1BWr-~JmBreyW1HlkWESIrdgRtAs5-vB9rCV1UetTV~jHfTbqVwFJcSM7222GSxz9s3KOAH~783ZRwduf8~eKIDS5scBNDBBhCV2XGeTtydqdFDNcqqHeNNFdyRWtywp~nwPfg6klm~9Fa1MeAqvAj1U7x-eTrDjW1rSsKVHLo9msdgv~8DQhXwCKaanYsmzPNZvUUwaS~BK8nVUNBTF4w~TV6E-6ggGsWg-poNJ2AqpVhe9ml8lxBDqwHOxHGBSZNGxO4hSTjP4tEV7CfhjW2FPmg~NYRuSGqFpxL9NCIX8dYJA__",
    //       title:
    //         "B Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-07",
    //       duration: "1 小時 30 分",
    //     },
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/5aa1/4d41/4a9b4213651cc1dbfbadd29c1e864258?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlJ8jEm8VthMMEIuERDMzA8YWW~fviRoeYPCpRaGkj7gPOf~~aTObI3bTCKd8~kkHx~WfS4~2fwCjqCH~5LfzhuO5C8gEdqN9t5EY8hZskZxP72C4EPwb3AwpGImkilcL3end3q1tWL-DIHHMdklEeZ4HnD9d2t-NKJqOv8c6OuEMmZHVR3cLsuuUiCOwm5VHjsv0JBEfgpOA~PAtnIzLuVRYOB0C5hvLw-GWVnMcRbBWIWITJdKRUQGRHSogYgrxJ4Us~fXRHtPR3r6l2chXNUqooShgC0YQ5EP9GfU6MPafXi1YE5RkPmheSXLm56LeUd92N9R8XqNX-HNm05ltQ__",
    //       title:
    //         "C Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-08",
    //       duration: "1 小時 40 分",
    //     },
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/22ed/573d/f24340ce94b8f0e31079a53749fa8175?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YejBJ1zeSjOZK5jIV4aqjEn-iNKT8voFZcrMX~mdpcS9iqLED57a4ix2uaXRPWzn5R0PCMJE9ZLgGkz25OnPNCOtY49LAmmVXSDsGcN1YsXPktzviOwE1HxjW28wSFikXOZ55W1sH9O3buSeWSKFRhyp2lkZg2Br1pz8seB4ldR6YFnYFN~g0x6WEfFs5ieQO8DW4~smTvzJleEUFCz60cShtlrFl1bqfJvDEN8c2IWgOIksh00uFnoLUosCM9SFTU9Pkq1eD2Luoskjv6L3KSe3OpnLRgEoC2uZbn~ZywUXQ-~Kb7bUj3BDt216SPJKdo35QUITlgnXhTYUTbnaNA__",
    //       title:
    //         "D Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-06",
    //       duration: "1 小時 20 分",
    //     },
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/a3e6/56f1/29cb67ae3e0f5ddacdccc345caf736f1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XuBk4n~Vnk1729Op0aCjHLiAx0s3buH9UFz5sSIxVgBjG7pIrJRSChfHXyhvPtdITfZ3kOK3O8gxfgNPBMGardLEKOlzAV3zURuHLXLoRhMLHsFYmJUpJAaCDd8RvLJ1jMfcKJTHknCDYd44Pif9YEl54zoho--Rkk1glDOqUoyJ00whyqBLHuCjY3WUrM52KbtERjLiRHhwIWA6yyUjSzWY~4Ne8VTDLh3SEfTEKqBRvgDsrXWJcOcK71LeVwIhYj1wCfFwg9WjoY-bfdaPujjqtve5DJ5k2ktXGr3dXm5peM4QVptKmoPlvAyfECJEcH3iJZijKIAFrJa~MjzbyA__",
    //       title:
    //         "E Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-07",
    //       duration: "1 小時 30 分",
    //     },
    //     {
    //       imageUrl:
    //         "https://s3-alpha-sig.figma.com/img/119a/8489/79edaadc3bd08a903a2a69ec323f624f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqbeUz8HSjEFYB2gBVxTiid1U39eRynjybuzGcJ4WroTHl8VBXEKWy6fQnuWy3Ksst7ezaQBi1NZSHKpiyq6-hMfxYWyzMPWNqcozppGO-yUc6gSs5ybBv6bTBD5WuYnLJeIlldstujWC-7oTjnEx3dojisZ5IYDTj1UYO-aNZ6XFNMq6JPAf6EeY3XQagPQWi1Z3lmb7qAOGFH1ZFGylFlY1Hp4HChtBgsP-Ce7pkZDMwE-eph2zp1vsdkOv53oCMP7QUJnb-YZIV1sLRsF23COM3RR2yl0F2lG~e8kXfKbhhcenCYQl0V3-7UIHo7VQmyyUkm8ByPgRSVwHnzrig__",
    //       title:
    //         "F Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
    //       description:
    //         "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
    //       date: "2023-04-08",
    //       duration: "1 小時 40 分",
    //     },
    //   ],
    // },
  ]);
  const [favoriteList, setFavoriteList] = useState({
    index: 99,
    emoji: "❤️",
    title: "已收藏video",
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
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/22ed/573d/f24340ce94b8f0e31079a53749fa8175?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YejBJ1zeSjOZK5jIV4aqjEn-iNKT8voFZcrMX~mdpcS9iqLED57a4ix2uaXRPWzn5R0PCMJE9ZLgGkz25OnPNCOtY49LAmmVXSDsGcN1YsXPktzviOwE1HxjW28wSFikXOZ55W1sH9O3buSeWSKFRhyp2lkZg2Br1pz8seB4ldR6YFnYFN~g0x6WEfFs5ieQO8DW4~smTvzJleEUFCz60cShtlrFl1bqfJvDEN8c2IWgOIksh00uFnoLUosCM9SFTU9Pkq1eD2Luoskjv6L3KSe3OpnLRgEoC2uZbn~ZywUXQ-~Kb7bUj3BDt216SPJKdo35QUITlgnXhTYUTbnaNA__",
        title:
          "D Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
        description:
          "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
        date: "2023-04-06",
        duration: "1 小時 20 分",
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/a3e6/56f1/29cb67ae3e0f5ddacdccc345caf736f1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XuBk4n~Vnk1729Op0aCjHLiAx0s3buH9UFz5sSIxVgBjG7pIrJRSChfHXyhvPtdITfZ3kOK3O8gxfgNPBMGardLEKOlzAV3zURuHLXLoRhMLHsFYmJUpJAaCDd8RvLJ1jMfcKJTHknCDYd44Pif9YEl54zoho--Rkk1glDOqUoyJ00whyqBLHuCjY3WUrM52KbtERjLiRHhwIWA6yyUjSzWY~4Ne8VTDLh3SEfTEKqBRvgDsrXWJcOcK71LeVwIhYj1wCfFwg9WjoY-bfdaPujjqtve5DJ5k2ktXGr3dXm5peM4QVptKmoPlvAyfECJEcH3iJZijKIAFrJa~MjzbyA__",
        title:
          "E Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
        description:
          "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
        date: "2023-04-07",
        duration: "1 小時 30 分",
      },
      {
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/119a/8489/79edaadc3bd08a903a2a69ec323f624f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GqbeUz8HSjEFYB2gBVxTiid1U39eRynjybuzGcJ4WroTHl8VBXEKWy6fQnuWy3Ksst7ezaQBi1NZSHKpiyq6-hMfxYWyzMPWNqcozppGO-yUc6gSs5ybBv6bTBD5WuYnLJeIlldstujWC-7oTjnEx3dojisZ5IYDTj1UYO-aNZ6XFNMq6JPAf6EeY3XQagPQWi1Z3lmb7qAOGFH1ZFGylFlY1Hp4HChtBgsP-Ce7pkZDMwE-eph2zp1vsdkOv53oCMP7QUJnb-YZIV1sLRsF23COM3RR2yl0F2lG~e8kXfKbhhcenCYQl0V3-7UIHo7VQmyyUkm8ByPgRSVwHnzrig__",
        title:
          "F Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators",
        description:
          "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.",
        date: "2023-04-08",
        duration: "1 小時 40 分",
      },
    ],
  });

  const [activeList, setActiveList] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [addCardModal, setAddCardModal] = useState(false);
  const [listActionModal, setListActionModal] = useState(false);

  const [currentAction, setCurrentAction] = useState(null);
  const [editInput, setEditInput] = useState("");

  const [currentPlayingTitle, setCurrentPlayingTitle] = useState(null);

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

      // const updatedChannelList = [...currentChannelList, ...selectedChannel];

      // updatedCategoryContent[activeList] = {
      //   ...targetCategory,
      //   channelList: updatedChannelList,
      // };

      return updatedCategoryContent;
    });
  };

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
