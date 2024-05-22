import { useEffect, useState } from "react";
import { getUserProfile } from "../api/spotify";
import { CreateAccount, GetFavoriteIds, GetCategory } from "../api/acRequest";
import { getCategoryEmoji, getChannelList } from "../api/dbRequest";
import { useNavigate } from "react-router-dom";
// import { usePodcastList } from "../contexts/PodcastListContext";
import { useUser } from "../contexts/UserContext";
import "../styles/progressBar.scss";

const Callback = () => {
  // const {} = usePodcastList();
  const { setToken } = useUser();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // 進度狀態
  const navigate = useNavigate();
  // console.log("目前進度:", progress);

  //取得驗證碼後 獲取各項data 並且存入localStorage
  useEffect(() => {
    const spotifyToken = localStorage.getItem("access_token");
    console.log("spotifyToken:", spotifyToken);

    if (!spotifyToken) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        setToken(spotifyToken);
        // 1. 取得 Spotify 使用者資訊
        const userProfileData = await getUserProfile(spotifyToken);
        console.log("取得使用者資訊", userProfileData);
        setProgress(10);
        // 2. 取得 acApi 帳戶 & acToken
        await CreateAccount();
        setProgress(20);
        // 3. 取得ac收藏清單 單集 ID
        const userFavoriteList = await GetFavoriteIds();
        console.log("取得使用者收藏清單:", userFavoriteList);

        setProgress(40);
        // 4. 取得db.json分類清單映射表情
        const categoryEmojiData = await getCategoryEmoji();
        console.log("取得清單映射表情:", categoryEmojiData.data);

        setProgress(60);

        // 5. 取得db.json頻道清單
        const channelListData = await getChannelList();
        console.log("取得頻道清單:", channelListData.data);

        setProgress(80);

        // 6. 獲取ac清單內容
        const userCategoryContent = await GetCategory();

        // console.log("映射表情之前userCategoryContent:", userCategoryContent);

        //添加屬性映射 emoji 到分類清單 & 存入localStorage
        const addedEmojiCategoryContent = userCategoryContent.map(
          (category) => {
            const emojiEntry = categoryEmojiData.data.find(
              (emoji) => emoji.id === category.id
            );
            return {
              ...category,
              emoji: emojiEntry ? emojiEntry.emoji : "❓",
            };
          }
        );

        localStorage.setItem(
          "userCategoryContent",
          JSON.stringify(addedEmojiCategoryContent)
        );
        console.log(
          "映射表情後的userCategoryContent:",
          addedEmojiCategoryContent
        );

        setProgress(100); // 更新進度
        console.log("progress:100%, 獲取初始資料完畢");
        // 初始化完成，延遲 2 秒后重定向到主頁
        setTimeout(() => {
          navigate("/main");
        }, 2000);
      } catch (error) {
        console.error("初始化過程中發生錯誤:", error);
      } finally {
        setLoading(false); // 關閉加載動畫
      }
    };

    if (spotifyToken) {
      fetchData();
    }
  }, [setToken, navigate]);

  return (
    <>
      <div className="progress-overlay">
        {loading ? (
          <>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text">
              獲取初始數據中, 請耐心等待...目前進度:{progress}%
            </div>
          </>
        ) : (
          <h1>數據獲取完成，即將前往主頁...</h1>
        )}
      </div>
    </>
  );
};

export default Callback;
