import axios from "axios";
const baseUri = "https://spotify-backend.alphacamp.io/";
// console.log(baseUri);
// const corsURL = "https://cors-anywhere.herokuapp.com/";

// 創建acAPI帳戶
export const CreateAccount = async () => {
  const uri = baseUri + "api/users";
  const spotifyToken = localStorage.getItem("access_token");
  const bodyParameters = {
    spotifyToken: spotifyToken,
  };

  axios
    // .post(corsURL + uri, bodyParameters)
    .post(uri, bodyParameters)
    .then((data) => {
      const token = data.data.token;
      console.log(
        "acAPI帳戶創建成功",
        "[id]:",
        data.data.id,
        "[token]:",
        data.data.token
      );
      localStorage.setItem("acToken", token);
    })
    .catch((err) => console.log(err));
};

//取得我的最愛
export const GetFavoriteIds = async () => {
  const url = `${baseUri}api/me`;
  const acToken = localStorage.getItem("acToken");
  console.log("acToken:", acToken);
  const config = {
    headers: {
      Authorization: `Bearer ${acToken}`,
    },
  };

  const response = await axios
    // .get(corsURL + url, config)
    .get(url, config)
    .then((data) => {
      console.log("用戶資料:", data.data.favoriteEpisodeIds);
      return data.data.favoriteEpisodeIds;
    })
    .catch((err) => console.log(err));

  return response;
};

//取得分類清單
export const GetCategory = async () => {
  const uri = baseUri + "api/categories";
  const acToken = localStorage.getItem("acToken");

  const config = {
    headers: {
      Authorization: "Bearer " + acToken,
    },
  };

  const response = await axios
    // .get(corsURL + uri, config)
    .get(uri, config)
    .then((data) => {
      console.log("分類清單:", data.data.categories);
      return data.data.categories;
    })
    .catch((err) => console.log(err));

  return response;
};

//移除episodeId至FavoriteList
export const RemoveFavorite = async (episode) => {
  const uri = baseUri + "api/episodes/" + episode;
  const acToken = localStorage.getItem("acToken");

  const config = {
    headers: {
      Authorization: "Bearer " + acToken,
    },
  };

  const response = axios
    // .delete(corsURL + uri, config)
    .delete(uri, config)
    .then(() => {
      return "success";
    })
    .catch((err) => console.log(err));
  return response;
};
//添加episodeId至FavoriteList
export const PostFavorite = async (episode) => {
  const uri = baseUri + "api/episodes";
  const acToken = localStorage.getItem("acToken");

  const bodyParam = { episodeId: episode };
  const config = {
    headers: {
      Authorization: `Bearer ${acToken}`,
    },
  };

  const response = await axios
    .post(uri, bodyParam, config)
    .then((data) => {
      console.log(data);
      return "success";
    })
    .catch((err) => {
      console.log("err: ", err);
      if (err.error.status === 403) {
        console.log("Invalid token!");
      }

      if (err.error.status === 409) {
        console.log("User has already favorited this episode");
      }
    });

  return response;
};

export const AddCategory = async ({ newTitle }) => {
  const uri = `${baseUri}api/categories`;
  const acToken = localStorage.getItem("acToken");
  const config = {
    headers: {
      Authorization: `Bearer ${acToken}`,
    },
  };
  const bodyParameters = {
    name: newTitle,
  };

  try {
    const response = await axios.post(uri, bodyParameters, config);
    console.log("Response status:", response.status);
    console.log("Response data:", response.data);
    return response.status === 200
      ? { success: true, data: response.data }
      : { success: false, message: `Failed with status: ${response.status}` };
  } catch (error) {
    console.error("新增分類清單發生錯誤:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Error connecting to server",
    };
  }
};

export const deleteCategory = async (categoriesId) => {
  const uri = `${baseUri}api/categories/${categoriesId}`;
  const acToken = localStorage.getItem("acToken");
  const config = {
    headers: {
      Authorization: "Bearer " + acToken,
    },
  };

  try {
    const response = await axios.delete(uri, config);
    console.log("Response status:", response.status);
    return response.status === 200
      ? { success: true, data: response.data }
      : { success: false, message: `Failed with status: ${response.status}` };
  } catch (error) {
    console.error("Error delete category:", error);
    return {
      success: false,
      message: error.message || "Error connecting to server",
    };
  }
};

export const putCategory = async ({ categoriesId, name }) => {
  console.log(categoriesId, name);
  const uri = `${baseUri}api/categories/${categoriesId}`;
  const acToken = localStorage.getItem("acToken");
  const config = {
    headers: {
      Authorization: "Bearer " + acToken,
    },
  };

  const bodyParameters = {
    name: name,
  };

  try {
    const response = await axios.put(uri, bodyParameters, config);
    console.log("Response status:", response.status);
    return response.status === 200
      ? { success: true, data: response.data }
      : { success: false, message: `Failed with status: ${response.status}` };
  } catch (error) {
    console.error("Error updating category:", error);
    return {
      success: false,
      message: error.message || "Error connecting to server",
    };
  }
};

//add show to category
export const addShowToCategory = async ({ categoryId, showId }) => {
  const uri = baseUri + `api/categories/${categoryId}/shows`;
  const acToken = localStorage.getItem("acToken");
  const bodyParam = { showId: showId };
  const config = {
    headers: {
      Authorization: `Bearer ${acToken}`,
    },
  };

  const response = await axios
    // .post(corsURL + uri, bodyParam, config)
    .post(uri, bodyParam, config)
    .then((res) => {
      return "success";
    })
    .catch((err) => console.log(err));

  return response;
};
