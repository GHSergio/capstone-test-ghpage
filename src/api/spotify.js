// import { refreshToken, refreshTokenClick } from "./Author";
import axios from "axios";

// const baseUri = "https://api.spotify.com";
const baseUri = process.env.REACT_APP_SPOTIFY_API_BASE_URL;
console.log("spotify env:", baseUri);
// 從 localStorage 中獲取 accessToken
const spotifyToken = localStorage.getItem("access_token");

//獲取使用者資訊
export const getUserProfile = async () => {
  //在全域spotifyToken 初始化讀取不到?
  //放在fn內 每次fn執行 都獲取最新
  const spotifyToken = localStorage.getItem("access_token");
  console.log(spotifyToken);

  const userProfileEndpoint = baseUri + "/v1/me";
  try {
    const response = await axios.get(userProfileEndpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    const userProfileData = response.data;
    // console.log("User Profile Data:", userProfileData);
    localStorage.setItem("userProfileData", JSON.stringify(userProfileData));
    return userProfileData;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        throw new Error("Unauthorized: Please log in again.");
      } else if (error.response.status === 403) {
        throw new Error("Forbidden: Access is denied.");
      } else {
        throw new Error(`API Error: ${error.response.statusText}`);
      }
    } else {
      throw new Error("Network Error");
    }
  }
};

// // 取得shows & Episodes
// export const getShows = async (ids) => {
//   const spotifyToken = localStorage.getItem("access_token");
//   const baseUri = "https://api.spotify.com";
//   console.log(ids);
//   try {
//     // 使用map創建一個包含所有請求的陣列
//     const requests = ids.map((id) =>
//       axios.get(`${baseUri}/v1/shows/${id}`, {
//         headers: {
//           Authorization: `Bearer ${spotifyToken}`,
//         },
//       })
//     );

//     // 使用Promise.all等待所有請求完成
//     const responses = await Promise.all(requests);

//     // 將所有響應資料放入一個陣列中
//     const showsData = responses.map((response) => response.data);
//     console.log(showsData); // 輸出所有獲得的show資料

//     return showsData; // 返回所有show資料的陣列
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

//取得shows & Episodes
export const getShowWithEpisodes = async (id) => {
  console.log(id);
  const spotifyToken = localStorage.getItem("access_token");
  const uri = `${baseUri}/v1/shows/${id}`;
  try {
    const showResponse = await axios.get(uri, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    const showData = showResponse.data;
    console.log(showData);

    return showData;
    // // 獲取show 的 episodes
    // const episodesResponse = await getShowEpisodes(id);
    // const episodesData = episodesResponse;
    // // console.log(episodesResponse);

    // // 構建需要的屬性
    // const showWithEpisodes = {
    //   title: showData.name,
    //   publisher: showData.publisher,
    //   description: showData.description,
    //   imageUrl: showData.images[0].url,
    //   episodes: episodesData,
    // };

    // return showWithEpisodes;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`The show with ID ${id} does not exist.`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
  }
};

export const getShowEpisodes = async (id) => {
  const spotifyToken = localStorage.getItem("access_token");

  const endpoint = `${baseUri}/v1/episodes/${id}/`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    console.log("getShowEpisodes:", response.data);
    return response.data;

    // const rawData = response.data.episodes.items;
    // // 構建需要的屬性
    // const formattedEpisodes = rawData.map((item) => ({
    //   id: item.id,
    //   title: item.name,
    //   description: item.description,
    //   imgSrc: item.images[0].url,
    //   date: item.release_date,
    //   videoLength: item.duration_ms,
    // }));
    // // console.log(formattedEpisodes);

    // return rawData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//取得oEmbed
export const getPlayerSrc = async (id) => {
  const endpoint = `${baseUri}/embed/episode/${id}&_source=oembed`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 4. Search Shows Info

export const searchShows = async (input) => {
  const spotifyToken = localStorage.getItem("access_token");
  const url = baseUri + "/v1/search";
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
      console.log(data.data.shows.items);
      return data.data.shows.items;
    })
    .catch(async (err) => {
      if (err.error.status === 401) {
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

//獲取分類清單
export const getUserShowList = async () => {
  const endpoint = baseUri + "/v1/me/shows?limit=50";
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

//獲取
export const getUserPlaylists = async () => {
  const endpoint = baseUri + "/v1/me/playlists";
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
    // console.log(playlistTracks);
    return playlistTracks;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
