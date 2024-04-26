import { useCallback, useEffect } from "react";
import { getUserProfile, getArtistProfile } from "../api/spotify";
import {
  loginWithSpotifyClick,
  // logoutClick,
  refreshTokenClick,
} from "../api/Author";
import { useUser } from "../contexts/UserContext";

const SpotifyAuthButton = () => {
  const { userData, setUserData, token, setToken } = useUser();

  const handleAuthClick = useCallback(async () => {
    try {
      await loginWithSpotifyClick();
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("access_token");
  //   console.log(accessToken);

  //   const fetchUserProfile = async () => {
  //     try {
  //       const userProfileData = await getUserProfile();
  //       setUserData(userProfileData);
  //       console.log("User Profile Data:", userProfileData);
  //     } catch (error) {
  //       console.error("Failed to fetch user profile:", error);
  //     }
  //   };

  //   if (accessToken) {
  //     setToken(accessToken);
  //     fetchUserProfile();
  //   }
  // }, [setToken, setUserData]);

  return (
    <div>
      <button className="login-button" onClick={handleAuthClick}>
        <p className="button-content"> 使用 SPOTIFY 帳號登入</p>
      </button>
      {/* <button onClick={() => getUserProfile()}>getArtist</button> */}
      {/* <button onClick={() => getArtistProfile()}>getArtistProfile</button> */}
      {/* <button onClick={() => refreshTokenClick()}>refreshAccessToken</button> */}
    </div>
  );
};

export default SpotifyAuthButton;
