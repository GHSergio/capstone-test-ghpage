import axios from "axios";

// 從 localStorage 中獲取 accessToken
const accessToken = localStorage.getItem("access_token");

export const getChannelList = async () => {
  const channelListEndpoint = "https://api.spotify.com/v1/channels";

  try {
    const response = await axios.get(channelListEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const channelListData = response.data;
    console.log("Channel List Data:", channelListData);
    return channelListData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserProfile = async () => {
  const userProfileEndpoint =
    "https://api.spotify.com/v1/artists/6xErgeZYatiaQ36SB5bvi8?si=OWLnHt3wSWC-Poq2UOLS4Q";
  try {
    const response = await axios.get(userProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userProfileData = response.data;
    console.log("User Profile Data:", userProfileData);
    return userProfileData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
