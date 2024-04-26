import axios from "axios";

const accessToken =
  "BQAXx4Epsu3pF02VGw13Iiu-tWW7DO45H88PYMwT43QfWt24TpX-CaGoN7c0K5ieorl2raQwSttMDPtEh0anCeemIvyoutTBHprLbBsCh1FLOd1cIyZkiA6PUwLwtlF2WK5iQ17hj9qktOrASJQK2nNAu9gDBluUqLBCfB0PtTh9IQXZEVMDe7ydZff-WbkLm3XsP78XH9lGnfO42qfDH1AmemfySrFLqg";

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
