import { refreshToken } from "./Author";
import axios from "axios";

const baseUri = "https://api.spotify.com";
// 從 localStorage 中獲取 accessToken
const spotifyToken = localStorage.getItem("access_token");
export const getUserProfile = async () => {
  const userProfileEndpoint = baseUri + "/v1/me";
  // await refreshToken();
  try {
    const response = await axios.get(userProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
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

export const getUserShowList = async () => {
  const endpoint = baseUri + "/v1/me/shows?limit=50";
  // await refreshToken();
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    const userShowList = response.data;
    console.log(userShowList);
    return userShowList;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserPlaylists = async () => {
  const endpoint = baseUri + "/v1/me/playlists";
  // await refreshToken();
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    // const userPlaylists = response.data.items;
    const userPlaylists = response.data.items.map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
      trackList: [],
    }));
    // console.log(userPlaylists);
    return userPlaylists;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 獲取播放清單中的歌曲項目
export const getPlaylistTracks = async (playlistId) => {
  const endpoint = `${baseUri}/v1/playlists/${playlistId}/tracks`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    // const playlistTracks = response;
    const playlistTracks = response.data.items;
    console.log(playlistTracks);
    return playlistTracks;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getShowEpisodes = async (id) => {
  const endpoint = `${baseUri}/v1/shows/${id}/episodes?limit=10`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    const rawData = response.data.items;
    console.log(rawData);
    const filterData = rawData.map((item) => {
      const { id, name, description, images, release_date, duration_ms } = item;
      return {
        id: id,
        title: name,
        description: description,
        imgSrc: images[0]["url"],
        date: release_date,
        videoLength: duration_ms,
      };
    });
    return filterData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 4. Search Shows Info

export const searchShows = async ({ input }) => {
  const url = baseUri + "/v1/search";
  const spotifyToken = localStorage.getItem("spotifyToken");
  const params = {
    q: input,
    type: "show",
    limit: 15,
  };

  const config = {
    headers: { Authorization: `Bearer ${spotifyToken}` },
    params,
  };

  const response = await axios
    .get(url, config)
    .then((data) => {
      console.log(response);
      return data.data.shows.items;
    })
    .catch(async (err) => {
      //If token is expired, refresh token
      if (err.error.status === 401) {
        await refreshToken();
      } else {
        console.log("request failed!!!");
        return "failed";
      }
    });

  if (response !== undefined) {
    return response;
  }
};

export const getArtistProfile = async () => {
  const artistProfileEndpoint =
    "https://api.spotify.com/v1/artists/6xErgeZYatiaQ36SB5bvi8?si=OWLnHt3wSWC-Poq2UOLS4Q";
  try {
    const response = await axios.get(artistProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
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