import axios from "axios";

// 從 localStorage 中獲取 accessToken
const accessToken = localStorage.getItem("access_token");
// console.log(accessToken);
export const getUserProfile = async () => {
  const userProfileEndpoint = "https://api.spotify.com/v1/me";

  try {
    const response = await axios.get(userProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userProfileData = response.data;
    // console.log("User Profile Data:", userProfileData);
    return userProfileData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 呼叫函式以獲取用戶資料
getUserProfile();

export const getArtistProfile = async () => {
  const artistProfileEndpoint =
    "https://api.spotify.com/v1/artists/6xErgeZYatiaQ36SB5bvi8?si=OWLnHt3wSWC-Poq2UOLS4Q";
  try {
    const response = await axios.get(artistProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const artistProfileData = response.data;
    console.log("Artist Profile Data:", artistProfileData);
    return artistProfileData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
