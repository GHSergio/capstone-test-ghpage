import axios from "axios";

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
// console.log(clientId);
// console.log(clientSecret);
//重導向
const redirectUri = "http://localhost:3000";

// 函式用於獲取授權碼
export const getAuthorizationCode = () => {
  //權限範圍
  const scopes =
    "streaming user-read-playback-position user-modify-playback-state user-read-playback-state user-read-private user-read-email";
  //使用者資訊組成完整Url
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
  // 將用戶重導向到 Url (專屬使用者的 Spotify 授權頁面)
  window.location.href = url;
};

export const getAccessToken = async (authorizationCode) => {
  const authEndpoint = "https://accounts.spotify.com/api/token";

  try {
    const response = await axios.post(
      authEndpoint,
      {
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      },
      // `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    localStorage.setItem("spotifyAccessToken", accessToken);
    localStorage.setItem("spotifyRefreshToken", refreshToken);
    return accessToken;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//獲取不到refreshAccessToken
const encodedId = btoa(clientId);
const encodedSecret = btoa(clientSecret);
// console.log(encodedId, encodedSecret);

export const refreshAccessToken = async () => {
  const authEndpoint = "https://accounts.spotify.com/api/token";
  const refreshToken = localStorage.getItem("spotifyRefreshToken");
  // console.log(refreshToken);

  try {
    const response = await axios.post(
      authEndpoint,
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: clientId,
      },
      // `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodedId}:${encodedSecret}`,
        },
      }
    );
    console.log(response);
    const accessToken = response.data.access_token;
    localStorage.setItem("refresh_token", response.refreshToken);

    // console.log("New Access Token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// // 函式用於處理授權碼並獲取存取令牌
// export const handleAuthorizationCode = async (authorizationCode) => {
//   try {
//     if (authorizationCode) {
//       const authEndpoint = "https://accounts.spotify.com/api/token";

//       const response = await axios.post(
//         authEndpoint,
//         {
//           grant_type: "authorization_code",
//           code: authorizationCode,
//           redirect_uri: redirectUri,
//           client_id: clientId,
//           client_secret: clientSecret,
//         },
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       const accessToken = response.data.access_token;
//       console.log("Access Token:", accessToken);
//       localStorage.setItem("spotifyAccessToken", accessToken);
//     } else {
//       console.error("Authorization code not found.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
