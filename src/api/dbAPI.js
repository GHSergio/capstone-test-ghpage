import axios from "axios";
const API_URL = "http://localhost:3333";

//獲取channelList
export const getChannelList = async () => {
  try {
    const response = await axios.get(`${API_URL}/channelList`);
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("channelListData", JSON.stringify(data));
      return { success: true, data: data };
    } else {
      return {
        success: false,
        message: `Failed with status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("獲取channelList發生錯誤:", error);
  }
};

//獲取清單表情
export const getCategoryEmoji = async () => {
  try {
    const response = await axios.get(`${API_URL}/categoryEmoji`);
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("categoryEmojiData", JSON.stringify(data));
      return { success: true, data: data };
    } else {
      return {
        success: false,
        message: `Failed with status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("獲取清單表情時發生錯誤:", error);
  }
};

//新增清單表情
export const addCategoryEmoji = async (categoryId, newEmoji) => {
  try {
    const response = await axios.post(`${API_URL}/categoryEmoji`, {
      id: categoryId,
      emoji: newEmoji,
    });
    if (response.status === 201) {
      const data = response.data;

      // 從 localStorage 中獲取現有的 categoryEmoji
      const categoryEmojiData =
        JSON.parse(localStorage.getItem("categoryEmojiData")) || [];

      // 添加新的項目
      categoryEmojiData.push({ id: categoryId, emoji: newEmoji });

      // 更新 localStorage
      localStorage.setItem(
        "categoryEmojiData",
        JSON.stringify(categoryEmojiData)
      );

      return { success: true, data: data };
    } else {
      return {
        success: false,
        message: `Failed with status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("新增emoji失敗:", error);
    return {
      success: false,
      message: error.message || "Error connecting to server",
    };
  }
};

//修改清單表情
export const editCategoryEmoji = async (categoryId, newEmoji) => {
  try {
    const response = await axios.put(`${API_URL}/categoryEmoji/${categoryId}`, {
      emoji: newEmoji,
    });
    if (response.status === 200) {
      const data = response.data;

      // 從 localStorage 中獲取現有的 categoryEmoji
      const categoryEmojiData =
        JSON.parse(localStorage.getItem("categoryEmojiData")) || [];

      // 更新相應的項目
      const updatedCategoryEmojiData = categoryEmojiData.map((item) =>
        item.id === categoryId ? { ...item, emoji: newEmoji } : item
      );
      console.log("請求API修改表情:updatedCategoryEmojiData");

      // 更新 localStorage
      localStorage.setItem(
        "categoryEmojiData",
        JSON.stringify(updatedCategoryEmojiData)
      );
      return { success: true, data: data };
    } else {
      return {
        success: false,
        message: `Failed with status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("更新emoji失敗:", error);
    return {
      success: false,
      message: error.message || "Error connecting to server",
    };
  }
};

//刪除清單表情
export const deleteCategoryEmoji = async (categoryId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/categoryEmoji/${categoryId}`
    );
    console.log(response.status);
    if (response.status === 200) {
      // 從 localStorage 中獲取現有的 categoryEmoji
      const categoryEmojiData =
        JSON.parse(localStorage.getItem("categoryEmojiData")) || [];

      // 移除相應的項目
      const updatedCategoryEmojiData = categoryEmojiData.filter(
        (item) => item.id !== categoryId
      );

      // 更新 localStorage
      localStorage.setItem(
        "categoryEmojiData",
        JSON.stringify(updatedCategoryEmojiData)
      );
      return { success: true, data: response.data };
    } else {
      return {
        success: false,
        message: `Failed with status: ${response.status}`,
      };
    }
  } catch (error) {
    console.error("刪除emoji失敗:", error);
    return {
      success: false,
      message: error.message || "Error connecting to server",
    };
  }
};
