import axios from "axios";
//新增清單表情
export const addCategoryEmoji = async (categoryId, newEmoji) => {
  try {
    const response = await axios.post(`http://localhost:3333/categoryEmoji`, {
      id: categoryId,
      emoji: newEmoji,
    });
    if (response.status === 200) {
      return { success: true, data: response.data };
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
    const response = await axios.put(
      `http://localhost:3333/categoryEmoji/${categoryId}`,
      { emoji: newEmoji }
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
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
      `http://localhost:3333/categoryEmoji/${categoryId}`
    );
    if (response.status === 200) {
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
