import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuthorizationCode,
  getAccessToken,
  // refreshAccessToken,
} from "../api/Auth";
import { getChannelList, getUserProfile } from "../api/spotify";

const SpotifyAuthButton = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const authCode = queryParams.get("code");

  //先取得授權碼
  const handleAuthClick = async () => {
    try {
      getAuthorizationCode();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //有授權碼後執行獲取令牌
  useEffect(() => {
    if (authCode) {
      console.log(`授權碼: ${authCode}`);
      getAccessToken(authCode);
    }
    // navigate("/main");
  }, [authCode]);

  return (
    <div>
      <button className="login-button" onClick={handleAuthClick}>
        <p className="button-content"> 使用 SPOTIFY 帳號登入</p>
      </button>
      <button onClick={() => getChannelList()}>getChannelList</button>
      <button onClick={() => getUserProfile()}>getArtist</button>
      {/* <button onClick={() => refreshAccessToken()}>refreshAccessToken</button> */}
    </div>
  );
};

export default SpotifyAuthButton;
